import test from 'ava'
import connect from '../lib/connect.js'

test('connect pwd options', t => {
	connect({password: 'yyy'})
	t.pass('ok')
})

test('connect pwd', t => {
	connect()
	t.pass('ok')
})
