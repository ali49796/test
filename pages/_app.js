import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if(!localStorage.getItem("username")){
      router.push('/login');
    }
  }, [])
  
  return <Component {...pageProps} />
}
