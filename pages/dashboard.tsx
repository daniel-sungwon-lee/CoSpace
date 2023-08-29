import { useState, useEffect } from 'react'
import localFont from 'next/font/local';
import { ConnectWithoutContactRounded, PostAddRounded } from "@mui/icons-material";
import { Button, Card, CardContent, List, ListItem, ListItemAvatar, Tab, Tabs } from "@mui/material";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Post from "@/components/post";
import Image from 'next/image';
import { LoadingButton, TabContext, TabPanel } from '@mui/lab'
import Schedule from '@/components/schedule';

const ProductSans = localFont({ src: '../public/fonts/ProductSans-Regular.ttf' })

export default function Dashboard () {
  const [loaded, setLoaded] = useState(false)
  const [open, setOpen] = useState(false)
  //const [screenWidth, setScreenWidth] = useState(screen.availWidth)

  const [page, setPage] = useState('1')

  useEffect(() => {
    setLoaded(true)

    window.addEventListener('resize', (e) => {
      //setScreenWidth(screen.availWidth)
    })

    if(loaded) {
      document.querySelector('.MuiDateRangeCalendar-root').firstChild.remove()
    }
  },[loaded])

  return (
    <>
      <div className="flex flex-col items-center mt-[7rem] mb-[8rem]">
        <div className="flex items-center w-[100%] justify-around mb-12 flex-col">
          <div className='w-[80%] mb-4'>
            <h1 className="text-4xl mb-4">Hello Username</h1>
            <h2 className="text-2xl">1 scheduled for today. 2 upcoming this week.</h2>
          </div>

          <div className='m-12 w-[80%]'>
            <Schedule />
          </div>

          <div className='flex justify-center'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateRangeCalendar calendars={/*window.screen.width < 767 ? 1 : 2*/1} />
            </LocalizationProvider>
          </div>
        </div>

        <Card sx={{width: '80%'}} className="mb-10">
          <CardContent>
            <TabContext value={page}>
              <Tabs onChange={(e, newValue) => setPage(newValue)} sx={{
                background: 'rgb(41, 112, 204)', margin: '-16px -16px 0px'
               }} variant='fullWidth' centered>
                <Tab sx={{textTransform: 'none', color: page === '1' ? 'white'  : ''}}
                 label='Available Spaces' value='1' />
                <Tab sx={{textTransform: 'none', color: page === '2' ? 'white' : ''}}
                 label ='Posted Spaces' value='2' />
              </Tabs>

              <TabPanel value='1'>
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
                        background: '#01c566 !important'}} type='submit'>
                          Connect
                      </LoadingButton>
                    </div>
                  </ListItem>

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
                        background: '#01c566 !important'}} type='submit'>
                          Connect
                      </LoadingButton>
                    </div>
                  </ListItem>
                </List>
              </TabPanel>

              <TabPanel value='2' sx={{minHeight: '500px', position: 'relative'}}>
                <div className='text-2xl absolute' style={{top: '50%', left: '50%',
                 transform: 'translate(-50%,-50%)'}}>
                  Nothing here yet...post a new Space!
                </div>
              </TabPanel>
            </TabContext>
          </CardContent>
        </Card>

        <div className='my-12'>
          <Button variant="contained" startIcon={<PostAddRounded />} sx={{
            textTransform: 'none', backgroundColor: '#4285F4 !important'
           }} onClick={()=> setOpen(true)}>
            Post new
          </Button>
        </div>

        <Post open={open} setOpen={setOpen} />
      </div>
    </>
  )
}
