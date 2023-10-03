import { Radio } from '@material-tailwind/react'
import { CustomButton } from '../../components/CustomButton'
import { CustomInput } from '../../components/CustomInput'
import { Sidebar } from '../../components/common/Sidebar'

export function RequestPass() {
  return (
    <section className="w-full h-screen">
      <div className="flex">
        <Sidebar />
        <div className="sm:m-7">
          <div className="flex sm:gap-[440px]">
            <div className="flex gap-4">
              <a href="#">
                <CustomButton
                  title="Current Request"
                  color="bg-[#F6F6F6]"
                  fillColor="black"
                />
              </a>
              <a href="#">
                <CustomButton
                  title="Pass History"
                  color="bg-[#F6F6F6]"
                  fillColor="black"
                />
              </a>
            </div>
            <div className="">
              <a href="#">
                <CustomButton
                  title="Request Pass"
                  color="bg-[#4D4D29] text-white"
                  fillColor="white"
                />
              </a>
            </div>
          </div>
          <div className="my-7">
            <h4 className="font-semibold">Outpass Type</h4>
            <div className="flex">
              <div className="pr-6">
                <Radio
                  required
                  label={<span className="font-semibold">Home</span>}
                  name="type"
                  ripple={true}
                  crossOrigin={undefined}
                />
              </div>
              <div className="pl-6">
                <Radio
                  required
                  label={<span className="font-semibold">General</span>}
                  name="type"
                  ripple={true}
                  crossOrigin={undefined}
                />
              </div>
            </div>
          </div>
          <div className="my-7">
            <div className="flex">
              <div className="pr-6">
                <h4 className="font-semibold pb-2">Out-date</h4>
                <CustomInput
                  label="Date"
                  type="date"
                  placeholder="dd/mm/yyyy"
                />
              </div>
              <div className="pl-6">
                <h4 className="font-semibold pb-2">In-date</h4>
                <CustomInput
                  label="Date"
                  type="date"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>
            <div className="flex mt-10">
              <div className="pr-6">
                <h4 className="font-semibold pb-2">Out Time</h4>
                <CustomInput label="Time" type="time" placeholder="_ _ : _ _" />
              </div>
              <div className="pl-6">
                <h4 className="font-semibold pb-2">In Time</h4>
                <CustomInput label="Time" type="time" placeholder="_ _ : _ _" />
              </div>
            </div>
            <div className="my-7">
              <h4 className="font-semibold pb-2">Place</h4>
              <CustomInput type="text" label="Place" containerStyle="" />
            </div>
          </div>
          <div className="flex">
            <a href="#">
              <CustomButton
                title="Send"
                color="bg-[#4D4D29] text-white"
                fillColor="white"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
