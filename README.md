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

### connect(\[opts\])

Connects to a Redis server or cluster.

### singleton(\[opts\])

Connects to a Redis instance or cluster as a singleton.

| parameter | type        | required | default            | description       |
| --------- | ----------- | -------- | ------------------ | ----------------- |
| opts      | Object      | no       | [see below](#opts) | [See configuration options](https://redis.github.io/ioredis/interfaces/CommonRedisOptions.html) |


#### opts

| parameter      | type             | required | default        | description                             |
| -------------- | ---------------- | -------- | -------------- | --------------------------------------- |
| address        | String\|String[] | no       | 127.0.0.1:6379 | The address or addresses of the Redis server(s). |
| password       | String           | no       | -              | The password for authenticating with the Redis server, if required. |
| clusterOptions | Object           | no       | -              | [See configuration options](https://redis.github.io/ioredis/interfaces/ClusterOptions.html) |


### Cluster

To use `Cluster`, set addresses separated by commas or an array and set [clusterOptions](https://redis.github.io/ioredis/interfaces/ClusterOptions.html).

```js
import {connect} from '@tadashi/connect-redis'

const redis = connect({
  address: '127.0.0.1:6379, 127.0.0.1:6380, 127.0.0.1:6381',
  // or
  address: ['127.0.0.1:6379', '127.0.0.1:6380', '127.0.0.1:6381'],
  // and
  clusterOptions: {
    retryDelayOnClusterDown: 500,
    // ...
  }
})
```

## Usage

```js
import {connect} from '@tadashi/connect-redis'

const redis = connect()

await redis.set('a', 'xxx')
const result = await redis.get('a')

console.log(result) // => xxx
```

## Buy Me a Coffee

BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4

## License

MIT © [Thiago Lagden](https://github.com/lagden)
