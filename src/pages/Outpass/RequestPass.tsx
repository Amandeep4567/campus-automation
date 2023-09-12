import { CustomButton } from '../../components/CustomButton'

export function RequestPass() {
  return (
    <section className="w-full h-screen">
      <div className="flex">
        <div className="h-screen sm:w-10 bg-[#4D4D29] sm:p-[130px]" />
        <div className="flex sm:gap-[440px] sm:m-7">
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
      </div>
    </section>
  )
}
