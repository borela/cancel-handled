Allow ReactJS events to be canceled by returning true.

## Installation

```sh
npm install --save cancel-handled
```

## Usage

```js
import React, { Component } from 'react'
import cancelHandled from 'cancel-handled'

class SomeComponent extends Component {
  handler(e) {
    console.log('Handler executed.')
    return true
  }

  render() {
    // The link won’t navigate because the handler returned true to indicate that
    // it handled the event already.
    return (
      <a
        href="/link"
        onClick={cancelHandled(this.handler)}
      >
        Ctrine!
      </a>
    )
  }
}
```
