import process from 'node:process'
import Redis from 'ioredis'

const {
	REDIS: ADDR,
	REDIS_PWD: PWD,
} = process.env

function _splitCommaDelimitedAddresses(addresses) {
	return addresses.split(',').map(address => {
		const [host, port = 6379] = address.split(':')
		return {host, port}
	})
}

function connect(_opts = {}) {
	const {address = ADDR, ...opts} = _opts

	opts.showFriendlyErrorStack = true
	if (PWD && opts.password === undefined) {
		opts.password = PWD
	}

	const collectionAddresses = _splitCommaDelimitedAddresses(address ?? '127.0.0.1:6379')

	if (collectionAddresses.length > 1) {
		return new Redis.Cluster(collectionAddresses, opts)
	}

	return new Redis({...opts, ...collectionAddresses[0]})
}

export default connect
