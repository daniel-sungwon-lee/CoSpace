import { Box, Button } from "@mui/material";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const ProductSans = localFont({ src: '../public/fonts/ProductSans-Regular.ttf' })

export default function Nav() {
  return (
    <Box sx={{position: "fixed", top: '0', width: '100vw', height: '4rem',
     background: '#4285F4', zIndex: '333', display: 'flex', alignItems: 'center'}}>
      <div className="flex items-center justify-between w-[98%]">
        <Link className="flex justify-center items-center ml-4" href="/">
          <Image src='/images/cospace.svg' alt='CoSpace logo' width={50} height={50}
          draggable={false} />
          <div className="text-2xl ml-2 font-bold text-white">CoSpace</div>
        </Link>

        <div className='flex'>
          <Button className={ProductSans.className} sx={{color: 'white',
           textTransform: 'none', fontSize: '16px'}}>Get Started</Button>
          <div className="mx-1"></div>
          <Button className={ProductSans.className} sx={{color: 'white',
           textTransform: 'none'}}>Login</Button>
        </div>
      </div>
    </Box>
  )
}
