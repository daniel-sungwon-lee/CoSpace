import { useState, useEffect } from 'react'
import localFont from 'next/font/local';
import { PostAddRounded } from "@mui/icons-material";
import { Button, Card, CardContent, List } from "@mui/material";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Post from "@/components/post";

const ProductSans = localFont({ src: '../public/fonts/ProductSans-Regular.ttf' })

export default function Dashboard () {
  const [open, setOpen] = useState(false)

  useEffect(() => {

  })

  return (
    <>
      <div className="flex flex-col items-center mt-[7rem] mb-[8rem]">
        <div className="flex items-center w-[100%] justify-around mb-12 flex-col">
          <div className='w-[80%] mb-4'>
            <h1 className="text-4xl mb-4">Hello User</h1>
            <h2 className="text-2xl">Nothing scheduled for today. 1 upcoming this week.</h2>
          </div>

          <div className='m-12'>Scheduled stuff here</div>

          <div className='flex justify-center'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateRangeCalendar calendars={1 /* change to two in desktop (screenWidth) */} />
            </LocalizationProvider>
          </div>
        </div>

        <Card sx={{width: '80%'}} className="mb-10">
          <CardContent>
            <h2>Available Spaces:</h2>

            <List></List>
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
