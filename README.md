# Extend-or-modify ![](https://travis-ci.org/whitecolor/extend-or-modify.svg)
Modifies or extends object
 
## Example

```javascript
var config = {
    some: 'defaultValue'
}

module.exports = require('extend-or-modify')(config, './config.mod.js', false)

```

`./config.mod.js` may return object with that `config` will be extended of a function that will be used as modifier
the third param if use deep extend, default is `true`  
