import { Field, ErrorMessage } from 'formik'
import React from 'react'

export interface Option {
  label: string
  value: string
}

export interface SelectProps {
  className?: string
  disabled?: boolean
  footnote?: string
  label?: string
  name: string
  options: Option[]
}

const Select = (props: SelectProps): JSX.Element => {
  const { disabled = false, footnote, label, name, options } = props

  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        name={name}
        className="form-control"
        component="select"
        disabled={disabled}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Field>
      <small className="form-text text-muted">{footnote}</small>
      <ErrorMessage name={name} className="invalid-feedback" component="div" />
    </div>
  )
}

export default Select
