import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import {
  Todo,
  UpdateTodoMutationVariables,
  useToDoQuery,
  useUpdateTodoMutation,
} from '../../graphql'
import TodoForm from '../../forms/Todo'

interface TodoParams {
  id: string
}

const TodoEdit = (props: RouteComponentProps<TodoParams>): JSX.Element => {
  const {
    history,
    match: {
      params: { id },
    },
  } = props

  const updateTodoMutation = useUpdateTodoMutation()
  const { data, error, loading } = useToDoQuery({ variables: { id } })

  if (error) return <p>Error: {error.message}</p>
  const todo = loading ? null : data.todo

  const onSubmit = async (formData: Todo): Promise<void> => {
    /*
    const variables: UpdateTodoMutationVariables = {
      id: formData.id,
      title: formData.title,
      complete: formData.complete,
      projectId: formData.project.id,
    }

    const [
      newTodo,
      { loading: updateLoading, error: updateError },
    ] = updateTodoMutation()

    if (updateLoading) {
      console.log('loading')
    }
    if (updateError) {
      console.log(error)
    }
*/
    history.push('/')
  }

  const onCancel = () => {
    history.push('/')
  }

  return (
    <div className="container">
      <h1>Edit Todo</h1>

      {loading && <p>Loading</p>}
      {!loading && (
        <TodoForm todo={todo} onSubmit={onSubmit} onCancel={onCancel} />
      )}
    </div>
  )
}

export default TodoEdit
