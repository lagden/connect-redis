'use strict'

process.env.REDIS_PWD = 'xxx'

const test = require('ava')
const connect = require('../lib/connect')

test('connect pwd', t => {
	connect()
	t.pass('ok')
})
