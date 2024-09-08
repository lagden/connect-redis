export function connectSingleton(opts?: {
    address?: string | string[];
    password?: string;
    clusterOptions?: any;
}): Cluster | Redis;
import { Cluster } from 'ioredis';
import { Redis } from 'ioredis';
