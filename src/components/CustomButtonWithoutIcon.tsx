import { Button } from '@material-tailwind/react'
import { CustomButtonWithoutIconProps } from '../types'

export function CustomButtonWithoutIcon({
  title,
  style,
}: CustomButtonWithoutIconProps) {
  return <Button className={`rounded-full ${style} `}>{title}</Button>
}
