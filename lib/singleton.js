'use strict'

const connect = require('./connect')

const KEY = Symbol.for('redis.connect')
const singleton = {}

function _connect(...args) {
	if (singleton[KEY]) {
		return singleton[KEY]
	}

	const [addresses, opts = {}] = args

	singleton[KEY] = connect(addresses, opts)
	return singleton[KEY]
}

const redis = {}
redis.connect = _connect

Object.freeze(redis)

module.exports = redis
