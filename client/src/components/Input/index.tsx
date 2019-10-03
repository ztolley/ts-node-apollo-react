import { Field, ErrorMessage } from 'formik'
import React from 'react'

export interface InputProps {
  disabled?: boolean
  footnote?: string
  label?: string
  name: string
  type?: string
}

export const Input: React.FC<InputProps> = ({
  disabled = false,
  footnote,
  label,
  name,
  type = 'text',
}) => (
  <div className="form-group">
    {label && <label htmlFor={name}>{label}</label>}
    <Field
      className="form-control"
      disabled={disabled}
      name={name}
      type={type}
    />
    <small className="form-text text-muted">{footnote}</small>
    <ErrorMessage className="invalid-feedback" component="div" name={name} />
  </div>
)
