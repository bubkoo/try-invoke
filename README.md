# try-invoke

> Attempts to invoke the given function, returning either the result or the caught error object.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/gearcase/try-invoke/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/gearcase/try-invoke/master.svg?style=flat-square)](https://travis-ci.org/gearcase/try-invoke)
[![coverage:?](https://img.shields.io/coveralls/gearcase/try-invoke/master.svg?style=flat-square)](https://coveralls.io/github/gearcase/try-invoke)


## Install

```
$ npm install --save try-invoke 
```

## Usage

> For more use-cases see the [tests](https://github.com/gearcase/try-invoke/blob/master/test/spec/index.js)

```js

var tryInvoke = require('try-invoke');

// tryInvoke(func, thisArg, args);

var obj = {
  add: function () {
    var result = 0;
    for (var i = 0, length = arguments.length; i < length; i++) {
      result += arguments[i]
    }
    return result;
  }
}
    
tryInvoke(function (a, b, c, d) {
  return this.add(a, b, c, d);
}, obj, [1, 2, 3, 4]);

// => 10
```

## Related

- [invoke-fn](https://github.com/gearcase/invoke-fn) - A faster alternative to `Function#apply`.
- [invoke-before](https://github.com/gearcase/invoke-before) - Returns a function that will only be executed before being called N times.
- [invoke-after](https://github.com/gearcase/invoke-after) - Returns a function that will only be executed after being called N times.
- [invoke-once](https://github.com/gearcase/invoke-once) - Restrict the given function only be invoked once.
- [is-native](https://github.com/gearcase/is-native) - Checks if the given value is a native function.
- [to-source-code](https://github.com/gearcase/to-source-code.git) - Converts function to its source code.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/gearcase/try-invoke/issues/new).
