import { Button } from '@material-tailwind/react'
import { CustomButtonProps } from '../types'

export function CustomButton({
  title,
  color,
  fillColor,
  onClick,
  active,
}: CustomButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      className={`flex items-center gap-3 ${color} ${active ? 'active' : ''}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 14"
        strokeWidth={0}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          d="M6.72134 11.4503L9 13.8905C9.22611 14.1259 9.64018 13.9547 9.64018 13.6338V11.4718L11.4491 11.4717C12.4357 11.4717 13.2373 10.6372 13.2373 9.6102L13.2375 1.86147C13.2375 0.834468 12.4358 0 11.4492 0H1.78827C0.801653 0 0 0.834468 0 1.86147V9.58881C0 10.6158 0.801653 11.4503 1.78827 11.4503L6.72134 11.4503ZM4.11094 4.42909L5.71424 4.30073L6.33093 2.73882C6.45424 2.43927 6.84481 2.43927 6.94763 2.73882L7.56432 4.30073L9.16763 4.42909C9.4759 4.45043 9.59936 4.83566 9.35259 5.04951L8.1192 6.1407L8.50979 7.76681C8.59195 8.06635 8.26317 8.32308 7.99591 8.15187L6.61871 7.27457L5.24151 8.15187C4.97425 8.32306 4.66597 8.06635 4.72763 7.76681L5.11822 6.1407L3.88483 5.04951C3.67922 4.85698 3.80252 4.45056 4.11094 4.42909ZM15.5602 3.10254C15.108 3.10254 14.7381 2.71747 14.7381 2.24675C14.7381 1.77602 15.108 1.39096 15.5602 1.39096H19.1779C19.6301 1.39096 20 1.77602 20 2.24675C20 2.71747 19.6301 3.10254 19.1779 3.10254H15.5602ZM14.7585 5.64877C14.7585 5.17805 15.1285 4.79298 15.5807 4.79298H18.2529C18.7051 4.79298 19.075 5.17805 19.075 5.64877C19.075 6.1195 18.7051 6.50456 18.2529 6.50456H15.5602C15.108 6.50456 14.7585 6.1195 14.7585 5.64877ZM14.7585 9.0508C14.7585 8.58007 15.1285 8.19501 15.5807 8.19501H17.2046C17.6568 8.19501 18.0267 8.58007 18.0267 9.0508C18.0267 9.52152 17.6568 9.90658 17.2046 9.90658H15.5601C15.1079 9.90658 14.7585 9.52152 14.7585 9.0508Z"
          fill={fillColor}
        />
      </svg>
      {title}
    </Button>
  )
}
