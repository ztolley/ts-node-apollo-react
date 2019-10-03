import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'

import {
  Todo,
  UpdateTodoMutationVariables,
  useToDoQuery,
  useUpdateTodoMutation,
} from '../../graphql'
import { TodoForm } from '../../forms/Todo'

export interface TodoParams {
  id: string
}

export const TodoEdit = (
  props: RouteComponentProps<TodoParams>
): JSX.Element => {
  const {
    history,
    match: {
      params: { id },
    },
  } = props

  const [
    updateTodo,
    { loading: updateLoading, error: updateError },
  ] = useUpdateTodoMutation()

  const { data, error, loading } = useToDoQuery({ variables: { id } })

  if (error) return <p>Error: {error.message}</p>
  if (updateError) return <p>Error Saving: {updateError.message}</p>

  const todo = loading ? null : data.todo

  const onSubmit = async (formData: Todo): Promise<void> => {
    const variables: UpdateTodoMutationVariables = {
      id: formData.id,
      title: formData.title,
      complete: formData.complete,
      projectId: formData.project.id,
    }

    updateTodo({ variables })
    history.push('/')
  }

  const onCancel = () => {
    history.push('/')
  }

  return (
    <Container className="py-3 center" style={{ maxWidth: 500 }}>
      <Card>
        <Card.Body>
          {loading && <p>Loading</p>}
          {!loading && (
            <TodoForm todo={todo} onSubmit={onSubmit} onCancel={onCancel} />
          )}

          {updateLoading && <p>Saving</p>}
        </Card.Body>
      </Card>
    </Container>
  )
}
