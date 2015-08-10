module.exports = function(obj, mod, deep){
    deep = deep !== false
    try {
        if (typeof mod == 'string'){
            if (require('fs').existsSync(mod)){
                mod = require(mod)
            } else {
                return obj
            }
        }

        obj = typeof mod == 'function'
            ? (mod(obj) || obj)
            : deep ? require('deep-extend')(obj, mod) : require('xtend')(obj, mod)
    } catch (e) {
        console.warn('Extend or modify error:', e)
    }

    return obj
}