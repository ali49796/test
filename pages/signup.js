import Link from 'next/link'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import {database} from '../firebase'

function Signup() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    try 
    {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Save this user in firestore
        await setDoc(doc(database , "users", user.uid), {
          "email":email,              
          "timestamp": serverTimestamp()
        })
  
        alert('user registered successfully');
        setEmail('');
        setPassword('');
        
    } 
    catch (error) {
        console.log("Something went wrong with registration: " + error);
    }
  }

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
        <div className='w-4/12 bg-gray-300 min-h-[200px] rounded-sm p-5 space-y-4'>
            <h2 className='font-bold text-center'>Sign Up</h2>
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
                    onClick={signup}
                >Signup</button>
            </form>
            <div>
                <p className='text-center'>
                    already have an account?
                    <Link href="/login" className='text-blue-500'> Login</Link> 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Signup