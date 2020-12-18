# connect-redis

[![NPM version][npm-img]][npm]
[![Node.js CI][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![Dependency Status][dep-img]][dep]
[![devDependency Status][devDep-img]][devDep]

[![XO code style][xo-img]][xo]
[![Snyk badge][snyk-img]][snyk]

[npm-img]:         https://img.shields.io/npm/v/@tadashi/connect-redis.svg
[npm]:             https://www.npmjs.com/package/@tadashi/connect-redis
[ci-img]:          https://github.com/lagden/connect-redis/workflows/Node.js%20CI/badge.svg
[ci]:              https://github.com/lagden/connect-redis/actions?query=workflow%3A%22Node.js+CI%22
[coveralls-img]:   https://coveralls.io/repos/github/lagden/connect-redis/badge.svg?branch=master
[coveralls]:       https://coveralls.io/github/lagden/connect-redis?branch=master
[dep-img]:         https://david-dm.org/lagden/connect-redis.svg
[dep]:             https://david-dm.org/lagden/connect-redis
[devDep-img]:      https://david-dm.org/lagden/connect-redis/dev-status.svg
[devDep]:          https://david-dm.org/lagden/connect-redis#info=devDependencies
[xo-img]:          https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:              https://github.com/sindresorhus/xo
[snyk-img]:        https://snyk.io/test/github/lagden/connect-redis/badge.svg
[snyk]:            https://snyk.io/test/github/lagden/connect-redis


Simplifying Redis connection


## Install

```
$ npm i -S @tadashi/connect-redis
```


## API

There are two ways to connect:

- `singleton.connect( \[addresses\] \[, opts \])`
- `connect( \[addresses\] \[, opts \])`

Name        | Type                 | Default           | Description
----------- | -------------------- | ----------------- | ------------
opts        | object               | {}                | See configuration options - [ioredis](https://github.com/luin/ioredis/blob/master/API.md) 
addresses   | string               | '127.0.0.1:6379'  | Addresses to connect (separated by commas)


### Cluster

To use `Redis.Cluster`, set addresses separated by commas:

```js
const redis = connect('127.0.0.1:6379,127.0.0.1:6380,127.0.0.1:6381')
```


## Usage

```js
'use strict'

const connect = require('@tadashi/connect-redis')

const redis = connect();

(async () => {
  await redis.set('a', 'xxx')
  const result = await redis.get('a')
  console.log(result) // => xxx
})()
```


## License

MIT © [Thiago Lagden](https://github.com/lagden)
