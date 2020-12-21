'use strict'

const Redis = require('ioredis')

const {
	REDIS: ADDR,
	REDIS_PWD: PWD
} = process.env

function _splitCommaDelimitedAddresses(addresses) {
	return addresses.split(',').map(address => {
		const [host, port = 6379] = address.split(':')
		return {host, port}
	})
}

function connect(...args) {
	const [addresses = ADDR, opts = {}] = args
	opts.showFriendlyErrorStack = true
	if (PWD) {
		opts.password = PWD
	}

	const collectionAddresses = _splitCommaDelimitedAddresses(addresses ?? '127.0.0.1:6379')

	if (collectionAddresses.length > 1) {
		return new Redis.Cluster(collectionAddresses, opts)
	}

	return new Redis({...opts, ...collectionAddresses[0]})
}

module.exports = connect
