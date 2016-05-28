# bind-action-dispatchers

**Micro library that curries and reduces the boilerplate of *bindActionCreators* and promotes better separation of concerns - [bind-action-dispatchers.js.org](http://bind-action-dispatchers.js.org)**


[![NPM](https://nodei.co/npm/bind-action-dispatchers.png?stars=true&downloads=true)](https://nodei.co/npm/bind-action-dispatchers/)


### The Code

![bind-action-creators](https://raw.githubusercontent.com/cchamberlain/bind-action-dispatchers/master/public/images/bind-action-creators_lg.png)


### Install

`npm i -S bind-action-dispatchers`


### How to use

**actionCreators.js - Your apps redux action creators**

```jsx
export const hello = noun => ({ type: 'HELLO', payload: noun })
```

**Foo.js - A higher order React component**

```jsx
import React from 'react'
import bindActionDispatchers from 'bind-action-dispatchers'
import { routeActions } from 'react-router-redux'
import * as appActions from './actionCreators'

const Foo = ({ routeDispatchers, ...appDispatchers }) => (
  <div>
    <button onClick={routeDispatchers.push('/route')}>Route</button>
    <button onClick={appDispatchers.hello('world')}>Hello</button>
  </div>
)

/**
 * Group the action creator functions that you would normally pass to bindActionCreators
 */

const actionCreators =  { routeDispatchers: routeActions
                        , ...appActions
                        }

/**
 * ALTERNATIVE
 * If you require the ownProps argument of mapDispatchToProps, use a function
 * for actionCreators that resolves to the object above. If a function is detected
 * bindActionDispatchers uses the slower version of mapDispatchToProps containing
 * ownProps.
 */

const actionCreators = ownProps =>  { routeDispatchers: routeActions
                                    , ...appActions(ownProps)
                                    }


/** Now the connect function looks really simple and your component has 0 references to dispatch. */

export default connect(null, bindActionDispatchers(actionCreators))(Foo)
```
