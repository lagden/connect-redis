/**
 * Connects to a Redis server or cluster.
 *
 * @param {Object} [props={}] - Options for connecting to Redis.
 * @param {string|string[]} [props.address] - The address or addresses of the Redis server(s).
 * @param {string} [props.password] - The password for authenticating with the Redis server, if required.
 * @param {Object} [props.clusterOptions={}] - Additional options for cluster configuration.
 * @returns {Cluster|Redis} An instance of a Redis connection or a Redis Cluster.
 */
export default function connect(props?: {
    address?: string | string[];
    password?: string;
    clusterOptions?: any;
}): Cluster | Redis;
import { Cluster } from 'ioredis';
import { Redis } from 'ioredis';
