import { useState, useEffect } from 'react'
import localFont from 'next/font/local';
import { ConnectWithoutContactRounded, PostAddRounded } from "@mui/icons-material";
import { Button, Card, CardContent, List, ListItem, ListItemAvatar } from "@mui/material";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Post from "@/components/post";
import Image from 'next/image';
import { LoadingButton } from '@mui/lab'
import Schedule from '@/components/schedule';

const ProductSans = localFont({ src: '../public/fonts/ProductSans-Regular.ttf' })

export default function Dashboard () {
  const [loaded, setLoaded] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setLoaded(true)

    if(loaded) {
      document.querySelector('.MuiDateRangeCalendar-root').firstChild.remove()
    }
  },[loaded])

  return (
    <>
      <div className="flex flex-col items-center mt-[7rem] mb-[8rem]">
        <div className="flex items-center w-[100%] justify-around mb-12 flex-col">
          <div className='w-[80%] mb-4'>
            <h1 className="text-4xl mb-4">Hello User</h1>
            <h2 className="text-2xl">Nothing scheduled for today. 1 upcoming this week.</h2>
          </div>

          <div className='m-12 w-[80%]'>
            <Schedule />
          </div>

          <div className='flex justify-center'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateRangeCalendar calendars={1 /* change to two in desktop (screenWidth) */} />
            </LocalizationProvider>
          </div>
        </div>

        <Card sx={{width: '80%'}} className="mb-10">
          <CardContent>
            <h2 className='text-2xl'>Available Spaces:</h2>

            <List>
              <ListItem className='flex flex-col my-8 p-7 rounded-lg'
               sx={{background: 'rgb(204 226 255)'}}>
                <div className='flex w-[100%] mb-6 flex-col'>
                  <ListItemAvatar className='w-[100%] mb-6'>
                    <Image width={200} height={200} src='/images/astronaut-alt.svg'
                    draggable='false' alt='Image of Space' className='rounded-2xl' />
                  </ListItemAvatar>

                  <div className='w-[100%]'>
                    <h1 className='text-2xl'>Name of Space</h1>
                    <h2 className='text-xl mb-4'>Date range</h2>
                    <h4>Descprition</h4>
                  </div>
                </div>

                <div className='flex justify-center w-[100%]'>
                  <LoadingButton variant='contained' loading={false} loadingPosition='start'
                   startIcon={<ConnectWithoutContactRounded />} sx={{textTransform: 'none',
                    background: '#4285F4 !important'}} type='submit'>
                      Connect
                  </LoadingButton>
                </div>
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <Button variant="contained" startIcon={<PostAddRounded />} sx={{
          textTransform: 'none', backgroundColor: '#4285F4 !important'
         }} onClick={()=> setOpen(true)}>
          Post new
        </Button>

        <Post open={open} setOpen={setOpen} />
      </div>
    </>
  )
}
