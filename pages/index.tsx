import localFont from 'next/font/local'
import Image from 'next/image'
import Lottie from 'lottie-react'
import houseAnimation from '../public/lotties/house.json'
import pigeonsAnimation from '../public/lotties/pigeons.json'
import teamworkAnimation from '../public/lotties/teamwork.json'
import Nav from '@/components/nav'
import { getAuth } from 'firebase/auth'
import { Button } from '@mui/material'

const ProductSans = localFont({src: '../public/fonts/ProductSans-Regular.ttf'})

const handleLogin = () => {

}

export default function Home({}) {
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
             onClick={handleLogin} variant='contained'>
              Login
            </Button>
          </div>
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
