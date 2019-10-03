import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Home } from './pages/Home'
import { TodoEdit } from './pages/TodoEdit'

const client = new ApolloClient({
  uri: '/api',
})

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Todo App</Navbar.Brand>
      </Navbar>
      <Route exact path="/" component={Home} />
      <Route exact path="/todo/:id" component={TodoEdit} />
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
)
