import localFont from 'next/font/local'
import Image from 'next/image'
import Lottie from 'lottie-react'
import houseAnimation from '../public/lotties/house.json'
import pigeonsAnimation from '../public/lotties/pigeons.json'
import teamworkAnimation from '../public/lotties/teamwork.json'
import Nav from '@/components/nav'
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'

import { getAuth, connectAuthEmulator, signInWithEmailAndPassword } from 'firebase/auth'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import { useEffect, useState } from 'react'
import Login from '@/components/login'
import { LoginRounded } from '@mui/icons-material'

const ProductSans = localFont({src: '../public/fonts/ProductSans-Regular.ttf'})

export default function Home({firebase}) {
  const [loaded, setLoaded] = useState(false)
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    setLoaded(true)
  },[loaded])

  const handleLogin = (firebase) => {
    setOpen(true)

    const auth = getAuth(firebase)
    connectAuthEmulator(auth, 'http://localhost:3000/')

     signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         const user = userCredential.user
        setEmail(email)
        setPassword(password)
       })
       .catch((error) => {
         console.error(error.message)
     })
  }

  return (
    <>
      <Nav />

      <main className={`${ProductSans.className} mt-[5rem]`}>
        <div className='flex justify-around items-center min-h-[50vh] mb-[4rem] mobile-display
         logoDiv'>
          <div className='text-7xl font-bold text-center mb-4 mobile-title'>CoSpace</div>
          <div className='flex justify-center'>
            <Image src='/images/cospace.svg' alt='CoSpace logo' width={400} height={400}
             draggable={false} />
          </div>
        </div>

        <div className='flex items-center justify-center mb-12 mx-8 mobile-display
         houseDiv'>
          <div className='w-1/3 mobile-sizing mobile-spacing houseAni'>
            <Lottie animationData={houseAnimation} loop={false} />
          </div>
          <p className='text-2xl w-1/2 mobile-font mobile-sizing mobile-spacing'>
            Welcome to CoSpace. CoSpace helps you connect with people you want to
            share spaces with.
          </p>
        </div>

        <div className='flex items-center justify-center mb-[8rem] mx-8 mobile-display'>
          <p className='text-2xl w-1/2 ml-[4rem] mobile-font mobile-sizing mobile-spacing
           pigeonText'>
            Once connected, you can seemlessly communicate with each other to
            manage all things with no conflict
          </p>
          <div className='w-96 mobile-sizing mobile-spacing'>
            <Lottie animationData={pigeonsAnimation} loop />
          </div>
        </div>

        <div className='flex items-center flex-col mb-12'>
          <h1 className='text-4xl mb-8'>Get started</h1>

          <div>
            <Button sx={{background: 'rgb(216, 87, 93) !important'}}
             onClick={() => handleLogin(firebase)} variant='contained'>
              Login
            </Button>
          </div>

          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Login</DialogTitle>

            <DialogContent>
              <DialogContentText>
                <LoginRounded className='mb-3' sx={{color:'black', fontSize:'40px'}} />
              </DialogContentText>

              <DialogContentText>
                Login to your account
              </DialogContentText>

              <TextField className='mt-3' id='outlined-basic' label='Username'
               required  variant='outlined' />
              <TextField className='mt-3' id='outlined-basic' label='Password'
               required  variant='outlined' />
            </DialogContent>

            <Button className='mt-4 mb-4 mx-5 ml-5 mr-5' sx={{background: 'rgb(216, 87, 93) !important',
              color: 'white'
             }} onClick={() => handleLogin(firebase)} variant='contained'>
              Login
            </Button>
          </Dialog>
        </div>

        <footer className='flex justify-center relative mt-4'>
          <div className='footer-circle'></div>
          <div className='w-1/4 teamworkAnimation'>
            <Lottie animationData={teamworkAnimation} loop />
          </div>
        </footer>
      </main>
    </>
  )
}
