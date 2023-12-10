import React, { useEffect, useState } from 'react'
import {auth,provider} from './config'
import {signInWithPopup} from 'firebase/auth'
import Card from './Card'


const SignIn = () => {
    const [value,setValue] = useState('')

    const handleClick=()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email" , data.user.email)
        })
        
    }
    useEffect(()=>{
        setValue(localStorage.getItem("email"))
    },[])

  return (
    <div>
        {value? <Card/>  :
          <div onClick={handleClick} class="flex items-center justify-center h-screen dark:bg-gray-800">
          <button class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
              <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
              <span>Login with Google</span>
          </button>
      </div>
        }
    </div>
  )
}

export default SignIn;
