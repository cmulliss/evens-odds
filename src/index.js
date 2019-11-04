import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import './index.css'

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
}

const rootReducer = (state, action) => {
  console.log('state', state, 'action', action)

  if (action.type === 'SET_GAME_STARTED') {
    return {
      gameStarted: action.gameStarted,
      instructionsExpanded: false
    }
  }

  return DEFAULT_SETTINGS
}
// initialise a store object by calling the createStore method
const store = createStore(rootReducer)
console.log('store.getState()', store.getState())
console.log('store', store)

store.subscribe(() => console.log('store.getState()', store.getState()))

const action1 = { gameStarted: true, type: 'SET_GAME_STARTED' }

store.dispatch(action1)

store.dispatch({ type: 'foo' })
store.dispatch({ type: 'bar' })

ReactDOM.render(<App />, document.getElementById('root'))

// reducers describe sections of the store
// dispatch broadcasts action objects to all reducers, to ask them if they want to update their part of the redux store.
