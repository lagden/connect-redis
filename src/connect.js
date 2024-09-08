import process from 'node:process'
import { Cluster, Redis } from 'ioredis'

const {
	REDIS: ADDR,
	REDIS_PWD: PWD,
} = process.env

/**
 * Parses a list of address strings into an array of objects with host and port.
 *
 * @param {string|string[]} address - A string or array of strings representing address in the form "host:port".
 * @returns {Array<Object>} An array of objects, each containing a host and port number.
 */
function parseAddress(address) {
	const _arr = Array.isArray(address) ? address : address.split(/[ ,]+/g)
	return _arr.map((address) => {
		let [host, port = 6379] = address.split(':')
		port = Number(port)
		return { host, port }
	})
}

/**
 * Connects to a Redis server or cluster.
 *
 * @param {Object} [props={}] - Options for connecting to Redis.
 * @param {string|string[]} [props.address] - The address or addresses of the Redis server(s).
 * @param {string} [props.password] - The password for authenticating with the Redis server, if required.
 * @param {Object} [props.clusterOptions={}] - Additional options for cluster configuration.
 * @returns {Cluster|Redis} An instance of a Redis connection or a Redis Cluster.
 */
export default function connect(props = {}) {
	const { address = ADDR, ...opts } = props
	const { clusterOptions = {}, ...redisOptions } = opts

	if (PWD && redisOptions?.password === undefined) {
		redisOptions.password = PWD
	}

	const collectionAddress = parseAddress(address ?? '127.0.0.1:6379')

	if (collectionAddress.length > 1) {
		return new Cluster(collectionAddress, { redisOptions, ...clusterOptions })
	}

	return new Redis({ ...redisOptions, ...collectionAddress[0] })
}
