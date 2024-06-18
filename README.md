# fire-once

[![npm package](https://img.shields.io/npm/v/fire-once?color=default&style=plastic&logo=npm)](https://www.npmjs.com/package/fire-once)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/magynhard/fire-once?color=default&label=browser&logo=javascript&style=plastic)](https://github.com/magynhard/fire-once/releases)
![downloads](https://img.shields.io/npm/dt/fire-once?color=blue&style=plastic)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg?style=plastic&logo=mit)](LICENSE)

> Javascript library that ensures that an irregularly but frequently event triggered function is fired only once at the
> given period
>
> Can also fire at the end of the defined period of time again, if the function was called at least twice. This can be
> very helpful to improve performance by
> ignoring superfluous, too frequent events but always processing the last call of the event.
>
> Available for node js and browser!

# Contents

* [Examples](#examples)
* [Installation](#installation)
* [Usage examples](#usage)
* [Documentation](#documentation)
* [Contributing](#contributing)

<a name="examples"></a>

## Examples

### Demonstration

If the `fire` function was called 50 times within one second (period: 1000),
it will actually called only two times: It will be immediately be called at the first call and then once again after
1000ms.

```javascript
const helloWorld = (name, number) => {
    console.log(`Hello ${name}, you are number ${number}!`);
}

for (let i = 1; i <= 50; ++i) {
    FireOnce.fire("hello_world_unique_id", () => {
        helloWorld("Peter", i);
    }, {period: 1000, fire_after: true});
}

//    0ms => Hello Peter, you are number 1!
// 1000ms => Hello Peter, you are number 50!
```

### Scroll event

In this example we want to limit the scroll event to be only fired a maximum of twice per second.

```javascript
addEventListener("scroll", (event) => {
    FireOnce.fire("scroll_limiter", () => {
        console.log("Scrolling ...");
    }, {period: 500});
});

//   0ms => Scrolling ...
// 500ms => Scrolling ...
```

### Several event sources

By specifying a unique identifier, you can also combine several event sources.

```javascript
const myEventTriggeredFun = () => {
    console.log("Triggered!");
};

element.on("click", (event) => {
    FireOnce.fire("my_event_limiter", myEventTriggeredFun, {period: 500});
});

WebSocket.on("push", (event) => {
    FireOnce.fire("my_event_limiter", myEventTriggeredFun, {period: 500});
});
```

<a name="installation"></a>

## Installation

### Option 1: node js - yarn

In your project root directory execute the following command:

```bash
yarn add fire-once
```

### Option 2: node js - npm

In your project root directory execute the following command:

```bash
npm install fire-once
```

### Option 3: Browser

`fire-once` is available in normal and minified version.

If you are unsure, us the normal version, that includes jsdocs and improves developer experience. The minified version
is only intended for productive use.

Download the `fire-once.js` or `fire-once.min.js` at
the [release page](https://github.com/magynhard/fire-once/releases) and
put it in an appropriate folder, e.g. `js/lib`
and reference it with an script tag in your project:

```html

<script type="text/javascript" src="js/lib/fire-once.js"></script>
```

If you are using a packager, you should add the source file to your build pipeline.

<a name="documentation"></a>

## Documentation

```javascript
  FireOnce.fire(identifier, func, options)
```

### Options

| Option   | Type   | Default | Description                                                                                          |
|----------|--------|---------|------------------------------------------------------------------------------------------------------|
| `period` | number | 1000    | In which period should the given function fired once                                                 |
| `type`   | string | 'both'  | 'both' Call the first and last call (if at least 2 calls) of the period at the beginning and the end. |
| TODO:    |        |         | 'start' Call only the first of the period at the beginning end surpress all calls until the end.     |
| TODO:    |        |         | 'end' Call only the last call of the period at the end of the period.                                |

<a name="documentation_jsdoc"></a>

### jsdoc

Check out the *jsdoc* documentation [here](doc/fire-once.jsdoc.md).

<a name="contributing"></a>

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/magynhard/fire-once. This project is intended
to be a safe, welcoming space for collaboration, and contributors are expected to adhere to
the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

