import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import TodoEdit from './pages/TodoEdit'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/edit/:id" component={TodoEdit} />
  </Switch>
)

export default App
