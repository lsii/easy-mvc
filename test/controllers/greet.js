
import test from 'ava'

var HelloController = require('../../app/controllers/HelloController')

test('greet test', async t => {
  let expect = 'hello'
  let res = await HelloController.greet()
  t.is(res.msg, expect)
})
