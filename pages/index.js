import React from 'react'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem('username');
    router.push('/login')
  }
  return (
    <div>
      <p>Home</p>
      <button
        onClick={logout}
      >Logout</button>
    </div>
  )
}

export default Home