import { Radio } from '@material-tailwind/react'
import { ChangeEvent, useState } from 'react'
import { Form } from 'react-router-dom'
import { CustomButton } from '../../components/CustomButton'
import { CustomInput } from '../../components/CustomInput'

export function RequestPassForm() {
  const [warningMessage, setWarningMessage] = useState('')
  const [userDetails, setUserDetails] = useState({
    type: '',
    outDate: '',
    inDate: '',
    outTime: '',
    inTime: '',
    place: '',
  })
  // const navigate = useNavigate()
  const validateForm = () => {
    for (const key in userDetails) {
      if (!userDetails[key as keyof typeof userDetails]) {
        setWarningMessage(`${alert(`Please fill in the "${key}" field.`)}`)
        return
      }
    }

    setWarningMessage('')
    console.log(userDetails)
    alert('Requested')
    // navigate('/passHistory')
  }
  return (
    <Form>
      <div className=" form_area">
        <div className="my-2">
          <h4 className="font-semibold">Outpass Type</h4>
          <div className="flex">
            <div className="pr-6">
              <Radio
                required
                label={<span className="font-semibold">Home</span>}
                name="type"
                ripple={true}
                crossOrigin={undefined}
                onClick={() => {
                  setUserDetails({ ...userDetails, type: 'Home' })
                }}
              />
            </div>
            <div className="pl-6">
              <Radio
                required
                label={<span className="font-semibold">General</span>}
                name="type"
                ripple={true}
                crossOrigin={undefined}
                onClick={() => {
                  setUserDetails({
                    ...userDetails,
                    type: 'General',
                  })
                }}
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
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setUserDetails({
                    ...userDetails,
                    outDate: event.target.value,
                  })
                  console.log(event.target.value)
                }}
              />
            </div>
            <div className="pl-6">
              <h4 className="font-semibold pb-2">In-date</h4>
              <CustomInput
                label="Date"
                type="date"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setUserDetails({
                    ...userDetails,
                    inDate: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex mt-10">
            <div className="pr-6">
              <h4 className="font-semibold pb-2">Out Time</h4>
              <CustomInput
                label="Time"
                type="time"
                placeholder="_ _ : _ _"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setUserDetails({
                    ...userDetails,
                    outTime: event.target.value,
                  })
                }
              />
            </div>
            <div className="pl-6">
              <h4 className="font-semibold pb-2">In Time</h4>
              <CustomInput
                label="Time"
                type="time"
                placeholder="_ _ : _ _"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setUserDetails({
                    ...userDetails,
                    inTime: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="my-7">
            <h4 className="font-semibold pb-2">Place</h4>
            <CustomInput
              type="text"
              label="Place"
              containerStyle="sm:w-[46%]"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setUserDetails({
                  ...userDetails,
                  place: event.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex">
          <a href="#" onClick={validateForm}>
            <CustomButton
              title="Send"
              color="bg-[#4D4D29] text-white"
              fillColor="white"
            />
          </a>
          {warningMessage && (
            <p className="text-red-500">{/*warningMessage*/}</p>
          )}
        </div>
      </div>
    </Form>
  )
}
