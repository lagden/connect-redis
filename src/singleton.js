import { Cluster, Redis } from 'ioredis'
import { immutable } from './immutable.js'
import connect from './connect.js'

const KEY = Symbol()
const singleton = {}

/**
 * Connects to a Redis instance or cluster as a singleton.
 *
 * If there is already an active connection, it returns that instance.
 * Otherwise, it establishes a new connection using the provided options.
 *
 * @param {Object} [opts={}] - Options used to establish the connection.
 * @param {string|string[]} [opts.address] - The address or addresses of the Redis server(s).
 * @param {string} [opts.password] - The password for authenticating with the Redis server, if required.
 * @param {Object} [opts.clusterOptions={}] - Additional options for cluster configuration.
 * @returns {Cluster|Redis} A singleton instance of a Redis connection or a Redis Cluster.
 */
export const connectSingleton = (opts = {}) => {
	if (singleton[KEY] instanceof Redis || singleton[KEY] instanceof Cluster) {
		return singleton[KEY]
	}

	singleton[KEY] = connect(opts)
	const immutableSingleton = immutable(singleton)
	return immutableSingleton[KEY]
}
