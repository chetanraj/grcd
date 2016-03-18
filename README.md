# grcd

> Grids Everywhere !

[![Inline docs](http://inch-ci.org/github/chetanraj/grcd.svg?branch=master)](http://inch-ci.org/github/chetanraj/grcd) [![Made With Love](https://img.shields.io/badge/Made%20With-Love-orange.svg)](https://github.com/chetanraj/grcd)

To install grcd with Bower:

```
bower install grcd
```

### How to use

Use the minified ```grcd.min.js``` from the dist folder & place the following in the head of your document.

```js
{
	dependencies : jQuery Latest
};
```

### Setup

```js
$(function () {
    $.grcd();
});
```

will create a grid layer on your html page.

### default options

```js
$(function () {
    $.grcd({
        width: '16'
    });
});
```

### remove

```js
$.grcd.destroy();
```