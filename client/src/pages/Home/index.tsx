import React from 'react'
import { Card, ListGroup, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useTodoListQuery } from '../../graphql'

export const Home: React.FC = () => {
  const { data, error, loading } = useTodoListQuery()
  const todos = !error && !loading && data && data.todos ? data.todos : null

  return (
    <Container className="py-3 center" style={{ maxWidth: 300 }}>
      <Card>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {todos && (
          <ListGroup variant="flush">
            {todos.map(({ title, id }) => (
              <ListGroup.Item key={id}>
                <Link to={`/todo/${id}`}>{title}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card>
    </Container>
  )
}
