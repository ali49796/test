import Link from 'next/link'
import {app} from '../firebase'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try 
    {
        await signInWithEmailAndPassword(auth, email, password)
        
        localStorage.setItem("username", email);
        router.push('/');
    } 
    catch (error) {
	    alert("Something went wrong with Signing In" + error);
    }
    // console.log(email + password);
  }

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
        <div className='w-4/12 bg-gray-300 min-h-[200px] rounded-sm p-5 space-y-4'>
            <h2 className='font-bold text-center'>Sign In</h2>
            <form className='flex flex-col gap-4'>
                <input 
                    type="text" 
                    placeholder='Enter Email'
                    className='py-2 px-5 border-none outline-none'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder='Enter Password'
                    className='py-2 px-5 border-none outline-none'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type='submit'
                    className='bg-blue-500 text-white py-2 rounded-full'
                    onClick={signin}
                >Signin</button>
            </form>
            <div>
                <p className='text-center'>
                    Dont have an account?
                    <Link href="/signup" className='text-blue-500'> Signup</Link> 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login