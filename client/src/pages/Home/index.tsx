import React from 'react'
import { Link } from 'react-router-dom'

import { useTodoListQuery } from '../../graphql'
import { Card, ListGroup, Container } from 'react-bootstrap'

const Home: React.FC = () => {
  const { data, error, loading } = useTodoListQuery()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data || !data.todos) return <p>No data</p>

  const { todos } = data

  return (
    <Container className="py-3 center" style={{ maxWidth: 300 }}>
      <Card>
        <ListGroup variant="flush">
          {todos.map(({ title, id }) => (
            <ListGroup.Item key={id}>
              <Link to={`/todo/${id}`}>{title}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Container>
  )
}

export default Home
