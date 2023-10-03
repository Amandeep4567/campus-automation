import { CustomButton } from '../CustomButton'

export const Navbar = () => {
  return (
    <div className="p-6 w-full flex justify-between flex-row items-center">
      <div className="flex space-x-4">
        <CustomButton
          title="Open Grievance"
          color="bg-[#F6F6F6]"
          fillColor="black"
        />

        <CustomButton
          title="Open Grievance"
          color="bg-[#F6F6F6]"
          fillColor="black"
        />
      </div>

      <CustomButton
        title="Open Grievance"
        color="bg-[#F6F6F6]"
        fillColor="black"
      />
    </div>
  )
}
