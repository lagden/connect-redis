import test from 'ava'
import singleton from '../lib/singleton.js'
import connect from '../lib/connect.js'

test('singleton', async t => {
	const redis = singleton.connect({address: '127.0.0.1:6379'})
	await redis.set('a', 'xxx')

	const redis2 = singleton.connect()
	const result = await redis2.get('a')
	t.is(result, 'xxx')
	t.true(redis === redis2)
})

test('connect', async t => {
	const redis = connect()
	await redis.set('b', 'yyy')
	const result = await redis.get('b')
	t.is(result, 'yyy')
})

test.cb('cluster', t => {
	const redis = connect({
		address: '127.0.0.1,127.0.0.1:6379',
		clusterRetryStrategy: () => false,
	})
	redis.on('error', error => {
		t.is(error.message, 'Failed to refresh slots cache.')
		t.end()
	})
})

// test.cb('error', t => {
// 	const redis = connect({
// 		addresses: 'xxx',
// 		retryStrategy: () => false,
// 	})
// 	redis.on('error', error => {
// 		t.regex(error.code, /EAI_AGAIN|ENOTFOUND/)
// 		t.end()
// 	})
// })
