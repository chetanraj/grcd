![grcd](img/grcd.png)

> Use grcd to add grids to your website.

[![Inline docs](http://inch-ci.org/github/chetanraj/grcd.svg?branch=master)](http://inch-ci.org/github/chetanraj/grcd) [![GitHub version](https://badge.fury.io/gh/chetanraj%2Fgrcd.svg)](https://badge.fury.io/gh/chetanraj%2Fgrcd) [![Bower version](https://badge.fury.io/bo/grcd.svg)](https://badge.fury.io/bo/grcd) [![demo included](https://img.shields.io/badge/demo-included-brightgreen.svg)](http://codepen.io/chetanraj/full/yOgGxr/)
[![Made With Love](https://img.shields.io/badge/Made%20With-Love-orange.svg)](https://github.com/chetanraj/grcd)

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

> will create a grid layer on your html page.

###### optional width to suite your html page

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
