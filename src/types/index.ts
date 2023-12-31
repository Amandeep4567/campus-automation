import { ChangeEvent } from 'react'

export interface CustomButtonProps {
  title: string
  color: string
  fillColor: string
  onClick?: () => void
  active?: string | boolean
}

export interface CustomInputProps {
  type: string
  placeholder?: string
  label?: string
  containerStyle?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface CustomButtonWithoutIconProps {
  title: string
  style: string
}

export interface NavbarProps {
  onCurrentRequest: () => void
  onPassHistory: () => void
  activeButton: string
}
