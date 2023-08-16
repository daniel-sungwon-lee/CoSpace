import localFont from 'next/font/local'
import Image from 'next/image'

const ProductSans = localFont({src: '../public/fonts/ProductSans-Regular.ttf'})

export default function Home() {
  return (
    <main className={`${ProductSans.className}`}>
      <div className='flex justify-around items-center'>
        <div className='text-7xl font-bold text-center mb-4'>CoSpace</div>
        <div className='flex justify-center'>
          <Image src='/images/cospace.svg' alt='CoSpace logo' width={300} height={300}
           draggable={false} />
        </div>
      </div>
    </main>
  )
}
