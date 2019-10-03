import { Formik, Form } from 'formik'
import React from 'react'

import { Checkbox, Input, Option, Select } from '../../components'
import { Project, Todo, useProjectListQuery } from '../../graphql'

export interface TodoFormProps {
  todo: Todo
  onCancel: () => void
  onSubmit: (formData: Todo) => void
}

export const projectToOption = ({ id, title }: Project): Option => ({
  value: id,
  label: title,
})

export const TodoForm: React.FC<TodoFormProps> = ({
  todo,
  onCancel,
  onSubmit,
}) => {
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
