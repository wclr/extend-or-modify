module.exports = function(obj, mod, deep){
    deep = deep !== false
    try {
        if (typeof mod == 'string'){
            mod = require('path').resolve(mod)
            if (require('fs').existsSync(mod)){
                mod = require(mod)
            } else {
                return obj
            }
        }
        mod = mod.default || mod // to handle export es6 syntax
        obj = typeof mod == 'function'
            ? (mod(obj) || obj)
            : deep ? require('deep-extend')(obj, mod) : require('xtend')(obj, mod)
    } catch (e) {
        console.warn('Extend or modify error:', e)
    }

    return obj
}
