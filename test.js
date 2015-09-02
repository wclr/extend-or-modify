var tape = require('tape'),
    extendOrModify = require('./index.js')

var config = {
    SOME_VAR: 'yeah',
    dev: {
        SOME_DEV_VAR: 'yeah'
    }
}

tape.test('test deep extend with config object', function(t){
    var result = extendOrModify(config, 'test-config-obj.js')
    console.log(result)
    t.ok(result.dev.SOME_DEV_VAR == 'yeah', 'SOME_DEV_VAR')
    t.ok(result.dev.NEW_DEV_VAR == 'cool', 'NEW_DEV_VAR')
    t.end()
})

tape.test('test modify with config function', function(t){
    t.end()
})