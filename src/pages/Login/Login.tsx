import { Button } from '@material-tailwind/react'
import { CustomButtonWithoutIcon } from '../../components/CustomButtonWithoutIcon'
import { CustomInput } from '../../components/CustomInput'

export function Login() {
  return (
    <div className="w-full flex flex-row h-screen items-center justify-center">
      <div className="xl:w-[70%] w-0 sm:w-[50%] h-full">
        <img src="./assets/Campus.jpg" className="object-cover h-full w-full" />
      </div>
      <section className="flex flex-col items-center justify-center h-screen sm:w-[30%] w-full">
        <h1 className="">LOGIN</h1>
        <div className="w-full max-w-xs p-3 space-y-4">
          <CustomInput type="text" label="Username" />
          <CustomInput type="password" label="Password" />
        </div>
        <div className="">
          <CustomButtonWithoutIcon title="LOGIN" style="bg-[#4D4D29]" />
        </div>
        <div className="">
          <Button
            size="lg"
            variant="outlined"
            color="blue-gray"
            className="flex items-center gap-3"
          >
            <img
              src="/assets/GoogleLogo.svg"
              alt="metamask"
              className="h-6 w-6"
            />
            Continue with Google
          </Button>
        </div>
      </section>
    </div>
  )
}
