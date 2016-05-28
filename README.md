# bind-action-dispatchers

**Micro library that curries and reduces the boilerplate of `bindActionCreators` and promotes better separation of concerns.**

[![NPM](https://nodei.co/npm/bind-action-dispatchers.png?stars=true&downloads=true)](https://nodei.co/npm/bind-action-dispatchers/)

## Install

`npm i -S bind-action-dispatchers`


## How to use

**actions.js - Your apps redux actions**

```jsx
export const hello = noun => ({ type: 'HELLO', payload: noun })
```

**Foo.js - A higher order React component**

```jsx
import React from 'react'
import bindActionDispatchers from 'bind-action-dispatchers'
import { routeActions } from 'react-router-redux'
import * as appActions from './actions'

const Foo = ({ routeActions ...appActions }) => (
  <div>
    <button onClick={routeActions.push('/route')}>Route</button>
    <button onClick={appActions.hello('world')}>Hello</button>
  </div>
)

/**
 * Group the action creator functions that you would normally pass to bindActionCreators
 */

const actionCreators = { routeActions, ...appActions }

/**
 * ALTERNATIVE
 * If you require the ownProps argument of mapDispatchToProps, use a function
 * for actionCreators that resolves to the object above. If a function is detected
 * bindActionDispatchers uses the slower version of mapDispatchToProps containing
 * ownProps.
 */

const actionCreators = ownProps => { routeActions, ...appActions(ownProps) }


/** Now the connect function looks really simple and your component has 0 references to dispatch. */

export default connect(null, bindActionDispatchers(actionCreators))(Foo)
```
