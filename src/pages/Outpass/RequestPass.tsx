import { useState } from 'react'
import { Navbar } from '../../components/Grievances/Navbar'
import { Sidebar } from '../../components/common/Sidebar'
import { PassHistory } from './PassHistory'
import { RequestPassForm } from './RequestPassForm'

export function RequestPass() {
  const [activeButton, setActiveButton] = useState('current')

  const handleCurrentRequest = () => {
    setActiveButton('current')
  }

  const handlePassHistory = () => {
    setActiveButton('history')
  }

  return (
    <>
      <section className="w-full h-screen">
        <div className="flex w-full">
          <Sidebar />
          <div className="sm:m-2 w-full">
            <Navbar
              onCurrentRequest={handleCurrentRequest}
              onPassHistory={handlePassHistory}
              activeButton={activeButton}
            />
            <div className="mx-8">
              {activeButton === 'current' ? (
                <RequestPassForm />
              ) : (
                <PassHistory />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
