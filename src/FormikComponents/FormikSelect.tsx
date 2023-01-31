import { useField } from 'formik'
import { useCallback } from 'react'
import { Select, SelectProps } from '@kgg/shared/src/components/Select/Select'

type FormikSelectProps<D extends { title: string } | string> = Omit<
  SelectProps<D>,
  'onSelectedChanged'
> & { name: string }

export const FormikSelect = <D extends { title: string } | string>({
  name,
  ...selectProps
}: FormikSelectProps<D>) => {
  const [field] = useField({ name })

  const handleOnSelect = useCallback(
    (value: D) => field.onChange({ target: { value, name } }),
    [field, name],
  )

  return <Select onSelectedChanged={handleOnSelect} {...selectProps} />
}
