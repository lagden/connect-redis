import { test } from 'node:test'
import assert from 'node:assert/strict'
import { connect } from '../src/index.js'

test('connect pwd options', () => {
	const redis = connect({ password: 'yyy' })
	redis.disconnect(false)
	assert.ok(true)
})

test('connect pwd', (t) => {
	const redis = connect()
	redis.disconnect(false)
	assert.ok(true)
})
