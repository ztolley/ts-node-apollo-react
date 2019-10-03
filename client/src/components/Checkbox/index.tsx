import { Field, ErrorMessage } from 'formik'
import React from 'react'

export interface CheckboxProps {
  disabled?: boolean
  footnote?: string
  label?: string
  name: string
  type?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  disabled = false,
  footnote,
  label,
  name,
}) => (
  <div className="form-group">
    {label && <label htmlFor={name}>{label}</label>}
    <Field
      className="form-control"
      disabled={disabled}
      name={name}
      type="checkbox"
    />
    <small className="form-text text-muted">{footnote}</small>
    <ErrorMessage name={name} className="invalid-feedback" component="div" />
  </div>
)
