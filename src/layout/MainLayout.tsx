import { ReactNode } from 'react'
import { Sidebar } from '../components/common/Sidebar'

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row w-full">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  )
}
