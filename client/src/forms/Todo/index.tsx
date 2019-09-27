import { Formik, Form } from 'formik'
import React from 'react'

import { Checkbox, Input, Select } from '../../components'
import { Option } from '../../components/Select'

import { Project, Todo, useProjectListQuery } from '../../graphql'

interface TodoFormProps {
  todo: Todo
  onCancel: () => void
  onSubmit: (formData: Todo) => void
}

const projectToOption = ({ id, title }: Project): Option => ({
  value: id,
  label: title,
})

const TodoForm = (props: TodoFormProps): JSX.Element => {
  const { todo, onCancel, onSubmit } = props

  const { data, error, loading } = useProjectListQuery()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  const projectOptions = data.projects.map(projectToOption)

  return (
    <Formik initialValues={todo} onSubmit={onSubmit}>
      <Form>
        <Input type="text" name="title" label="Title" />
        <Select name="project.id" label="Project" options={projectOptions} />
        <Checkbox name="complete" label="Complete?" />
        <hr />
        <button className="btn" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </Form>
    </Formik>
  )
}

export default TodoForm
