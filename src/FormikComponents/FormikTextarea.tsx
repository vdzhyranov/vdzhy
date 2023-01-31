import { Field, FieldProps } from 'formik'
import React from 'react'
import { FormikError } from './FormikError'

type Props = {
  className?: string
  label?: string
  placeholder?: string
  name: string
  required?: boolean
  textColor?: string
  value?: string | number
  readOnly?: boolean
  error?: string
  touched?: boolean
}

export const FormikTextarea: React.FC<Props> = ({
  name,
  required,
  label,
  placeholder,
  className,
  textColor = 'black',
  value = '',
  readOnly,
  error,
  touched = false,
}) => {
  return (
    <>
      <div className={`${label && 'mt-2'}`}>
        {label && (
          <label
            htmlFor={name}
            className={`block pb-1 text-sm font-medium text-${textColor}`}
          >
            {label}
            {required && <span className={'pl-1 text-red-700'}>{'*'}</span>}
          </label>
        )}
        <Field name={name}>
          {({ field }: FieldProps) => (
            <textarea
              id={name}
              placeholder={placeholder ?? label}
              disabled={readOnly}
              rows={10}
              {...field}
              value={value}
              className={`relative block w-full appearance-none ${className} border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
            />
          )}
        </Field>
      </div>
      {error && touched && <FormikError errorMessage={error} />}
    </>
  )
}
