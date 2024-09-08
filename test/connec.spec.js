import { test } from 'node:test'
import assert from 'node:assert/strict'
import { pEvent } from 'p-event'
import { connect, singleton } from '../src/index.js'

test('singleton', async () => {
	const redis = singleton({ address: '127.0.0.1:6379' })
	await redis.set('a', 'xxx')

	const redis2 = singleton()
	const result = await redis2.get('a')

	assert.equal(result, 'xxx')
	assert.ok(redis === redis2)

	redis.disconnect(false)
})

test('connect', async () => {
	const redis = connect()

	await redis.set('b', 'yyy')
	const result = await redis.get('b')

	assert.equal(result, 'yyy')

	redis.disconnect(false)
})

test('cluster', async () => {
	const redis = connect({
		address: '127.0.0.1,127.0.0.1:6379',
		clusterRetryStrategy: () => false,
	})
	const error = await pEvent(redis, 'error')
	assert.equal(error.message, 'Failed to refresh slots cache.')

	redis.disconnect(false)
})

test('cluster array', async () => {
	const redis = connect({
		address: ['127.0.0.1', '127.0.0.1:6379'],
		clusterRetryStrategy: () => false,
	})
	const error = await pEvent(redis, 'error')
	assert.equal(error.message, 'Failed to refresh slots cache.')

	redis.disconnect(false)
})

// test('error', async t => {
// 	const redis = connect({
// 		addresses: 'xxx',
// 		retryStrategy: () => false,
// 	})
// 	const error = await pEvent(redis, 'error')
// 	t.regex(error.code, /EAI_AGAIN|ENOTFOUND/)
// })
