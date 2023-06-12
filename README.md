# connect-redis

[![NPM version][npm-img]][npm]
[![Node.js CI][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![Snyk badge][snyk-img]][snyk]

[npm-img]:         https://img.shields.io/npm/v/@tadashi/connect-redis.svg
[npm]:             https://www.npmjs.com/package/@tadashi/connect-redis
[ci-img]:          https://github.com/lagden/connect-redis/workflows/Node.js%20CI/badge.svg
[ci]:              https://github.com/lagden/connect-redis/actions?query=workflow%3A%22Node.js+CI%22
[coveralls-img]:   https://coveralls.io/repos/github/lagden/connect-redis/badge.svg?branch=main
[coveralls]:       https://coveralls.io/github/lagden/connect-redis?branch=main
[snyk-img]:        https://snyk.io/test/github/lagden/connect-redis/badge.svg
[snyk]:            https://snyk.io/test/github/lagden/connect-redis


Simplifying Redis connection


## Install

```
$ npm i -S @tadashi/connect-redis
```


## API

There are two ways to connect:

- `singleton.connect(\[opts\])`
- `connect(\[opts\])`

Name    | Type     | Default                     | Description
------- | -------- | --------------------------- | ------------
opts    | object   | {address: '127.0.0.1:6379'} | See configuration options - [ioredis](https://luin.github.io/ioredis/interfaces/CommonRedisOptions.html)


**Obs.:**

`opts.address` Addresses to connect (separated by commas)


### Cluster

To use `Redis.Cluster`, set addresses separated by commas:

```js
const redis = connect({
  address: '127.0.0.1:6379,127.0.0.1:6380,127.0.0.1:6381'
})
```


## Usage

```js
import connect from '@tadashi/connect-redis'

const redis = connect()

await redis.set('a', 'xxx')
const result = await redis.get('a')

console.log(result) // => xxx
```


## License

MIT © [Thiago Lagden](https://github.com/lagden)
