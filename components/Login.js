import React from 'react'
import { signIn } from 'next-auth/client'
import { Button } from '@material-tailwind/react'

function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Button
        className="w-44"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  )
}

export default Login
