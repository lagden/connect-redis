import connect from './connect.js'

const KEY = Symbol.for('redis.connect')
const singleton = {}

function _connect(opts = {}) {
	if (singleton[KEY]) {
		return singleton[KEY]
	}

	singleton[KEY] = connect(opts)
	return singleton[KEY]
}

const redis = {}
redis.connect = _connect

Object.freeze(redis)

export default redis
