'use strict'

const test = require('ava')
const singleton = require('../lib/singleton')
const connect = require('../lib/connect')

test('singleton', async t => {
	const redis = singleton.connect('127.0.0.1:6379')
	await redis.set('a', 'xxx')

	const redis2 = singleton.connect('127.0.0.1:6379')
	const result = await redis2.get('a')
	t.is(result, 'xxx')
	t.true(redis === redis2)
})

test.cb('connect', t => {
	const redis = connect('127.0.0.1,127.0.0.1:6379', {
		clusterRetryStrategy: () => false
	})
	redis.on('error', error => {
		t.is(error.message, 'Failed to refresh slots cache.')
		t.end()
	})
})
