import { Input } from '@material-tailwind/react'
import { CustomInputProps } from '../types'

export function CustomInput({
  type,
  placeholder,
  label,
  containerStyle,
  onChange,
}: CustomInputProps) {
  return (
    <section>
      <Input
        required
        type={type}
        label={label}
        placeholder={placeholder}
        className={`${containerStyle}`}
        crossOrigin={undefined}
        onChange={onChange}
      />
    </section>
  )
}
