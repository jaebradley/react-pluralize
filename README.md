[![Greenkeeper badge](https://badges.greenkeeper.io/jaebradley/react-pluralize.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/jaebradley/react-pluralize.svg?branch=master)](https://travis-ci.org/jaebradley/react-pluralize)
[![codecov](https://codecov.io/gh/jaebradley/react-pluralize/branch/master/graph/badge.svg)](https://codecov.io/gh/jaebradley/react-pluralize)
[![npm](https://img.shields.io/npm/v/@jaebradley/react-pluralize.svg)](https://www.npmjs.com/package/@jaebradley/react-pluralize)
[![npm](https://img.shields.io/npm/dt/@jaebradley/react-pluralize.svg)](https://www.npmjs.com/package/@jaeradley/react-pluralize)

# react-pluralize

A simple `React` component that wraps [the `pluralize` library](https://github.com/blakeembrey/pluralize).

## Installation

```bash
npm install @jaebradley/react-pluralize
```

```bash
yarn add @jaebradley/react-pluralize
```

## Usage

```jsx
import Pluralize from 'react-pluralize';

<Pluralize
  word={'test'}
  count={1}
>
  {' sucks'}
</Pluralize>

<Pluralize
  word={'test'}
  count={5}
>
  <div>
    <b>
      really sucks
    </b>
  </div>
</Pluralize>
```

![pluralize](https://imgur.com/TcQiF39https://imgur.com/TcQiF39.png)

## API

### Props

* `word` (required) - singular form of word
* `count` (required) - instances of `word`
* `includeCounts` - option to include `count` in text; defaults to `true`
