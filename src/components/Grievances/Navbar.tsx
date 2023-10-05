import { NavbarProps } from '../../types'
import { CustomButton } from '../CustomButton'

export const Navbar = ({
  onCurrentRequest,
  onPassHistory,
  activeButton,
}: NavbarProps) => {
  return (
    <div className="p-6 w-full flex justify-between flex-row items-center">
      <div className="flex space-x-4">
        <CustomButton
          title="CURRENT REQUEST"
          color="bg-[#F6F6F6]"
          fillColor="black"
          onClick={onCurrentRequest}
          active={activeButton}
        />

        <CustomButton
          title="PASS HISTORY"
          color="bg-[#F6F6F6]"
          fillColor="black"
          onClick={onPassHistory}
          active={!activeButton}
        />
      </div>

      <CustomButton
        title="REQUEST PASS"
        color="bg-[#F6F6F6]"
        fillColor="black"
      />
    </div>
  )
}
