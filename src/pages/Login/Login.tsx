import { FcGoogle } from 'react-icons/fc'

export function Login() {
  return (
    <div className="w-full flex flex-row h-screen">
      <div className="xl:w-3/5 w-0 sm:w-1/2 h-full relative">
        <img
          src="https://lh3.googleusercontent.com/pw/ADCreHdJ-0qRsf-8rWOEOo0vZcESJRvaOlqReOebTxukkU9P5N_VkjkLNMX5Jkg9FWX4QzVXfkuxF39L3SOnvMgX8RMprZ3gOXV6NWT_OnDnHevVuE0vd14czII8_gIl1bkqrW5thARdQMlcGAKlGa0X4NBTB4X2rdSCWCkCDpbZuiKXgGcBLm58otqP2zJkHoJ8mo-wxcqC9gbL6MHVgP-Gih0rmTXqd8bBvppxYo1wEEkC9w0u1w7AFb20XoIdSbAFxvFNbaNDb3xFBb_BnZ5c6PY3_q1e7vcNaJ9ek93GdaNbHQRP6huGN6xpo7tOpucH3yn7IahyAx6NqxVOL3vEL1JFnwJThOLlJVHZUx5Nep_G45zpTdTuS-FMiE3t-H9aWPdUYXUD_PhleJxq8G-iA4-GUE2RygWqhZtRSADXhpgrUMBOvJFlHMIaL4whKD1zwuLVlbIEQwRok6x5Kjuhv7Pb7zo2fv22nXoC1sQjmRDB1kskMbBkBArH-tTF4Eg9aDP0Gk7jca5gDhdUWlzs2H_IYPXsB_uxCnBF4I9tJSazezkQt71GKw4E3xbEtMYIJy02TZ1q2KRDXYVZbqrG7yebSTSyf2Z8XJ0pxwxrUwbBhIH2Ww92wl--LVswUpTWf8q_J8CQhqSR3EobS5KT_ZIGjUd3wDzThj9hlYxQmjnSB9L1uyXaXvS9Lz6TG2PAiohinC2qUqudXs4_wdFBbZPqhyzyMEZ5Kny5GLFJBXZzrg3_2kZQdYACso08ei4EGMJj2KNN-LTJX96gsAMuTHYG0FOBtv4uRAyBGZAU1d3XDDMIfp6kg8roqdQ3GReZLY9AUSJ8jep9ScXUig5kSi8tqBKbT7SXr3pjeK79f1ZV_wF3GiSijVzXc_EG2CX_HXG4eWe8V-KrW-6osFg_B2LPgXpaT4HG4NiyD1fdlTp_2VFik5OjE37NdMY6=w1974-h1480-s-no?authuser=0"
          className="h-full w-full"
        />
        <img
          src="https://srmap.edu.in/file/2019/12/White.png?x85851"
          className="h-40 w-auto mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex relative flex-col items-center justify-center h-screen xl:w-2/5 sm:w-1/2 space-y-16 w-full">
        <h1
          className="text-3xl font-semibold text-gray-800 leading-7"
          style={{
            fontFamily: 'inter',
          }}
        >
          SignIn to Your Account
        </h1>
        <button
          onClick={() => {}}
          className="flex h-fit w-fit cursor-pointer items-center space-x-2 rounded-md border border-gray-300 bg-white px-10 py-2 font-medium shadow-md"
        >
          <div className="flex items-center space-x-4">
            <FcGoogle className="text-2xl" />
            <span
              className="text-base font-medium text-gray-800"
              style={{
                fontFamily: 'inter',
              }}
            >
              Sign in with Google
            </span>
          </div>
        </button>

        <span className="text-sm text-gray-500 max-w-xs w-full text-center">
          By continuing, you are indicating that you accept our Terms of Service
          and Privacy Policy.
        </span>

        <span className="text-sm text-gray-500 max-w-xs w-full text-center absolute bottom-10">
          All rights reserved. &copy; 2021{' '}
          <a href="https://srmap.edu.in/">SRM University AP</a>
        </span>
      </div>
    </div>
  )
}
