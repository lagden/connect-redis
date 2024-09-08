import { test } from 'node:test'
import assert from 'node:assert/strict'
import { immutable } from '../src/immutable.js'

test('immutable', () => {
	const a = {
		b: 123,
	}
	const ai = immutable(a)

	assert.throws(() => {
		ai.b = 456
	}, {
		message: 'Cannot set property, object is immutable.',
	})

	assert.throws(() => {
		delete ai.b
	}, {
		message: 'Cannot delete property, object is immutable.',
	})
})
