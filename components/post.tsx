import * as React from 'react'
import { useState, useEffect } from 'react';
import localFont from 'next/font/local';
import { CloseRounded, PostAddRounded } from "@mui/icons-material";
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Slide, TextField } from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker, SingleInputDateRangeField } from '@mui/x-date-pickers-pro';
import { LoadingButton } from '@mui/lab';

const ProductSans = localFont({ src: '../public/fonts/ProductSans-Regular.ttf' })

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Post ({open, setOpen} : {open: boolean, setOpen: Function}) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {

  })

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
  }

  return (
    <>
      <Dialog fullScreen open={open} onClose={(event,reason)=> {
        if(reason === 'backdropClick' || reason === 'escapeKeyDown') {
          setOpen(true)
        } else {
          setOpen(false)
        }
       }} TransitionComponent={Transition} PaperProps={{sx : {background: '#4285F4'}}}>
        <DialogTitle sx={{background: 'white', margin: '2rem',
         width: 'fit-content', borderRadius: '2rem'}}>
          Post a new Space!
        </DialogTitle>

        <DialogContent sx={{background: 'white', borderRadius: '2rem', margin: '2rem'}}>
          <form className='m-8' onSubmit={handleSubmit}>
            <TextField label='Name of Space' variant='standard' fullWidth
             value={name} onChange={(e) => setName(e.target.value)} />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateRangePicker calendars={1} disablePast onOpen={() => {
                //document.querySelector('.MuiDateRangeCalendar-root').firstChild.remove()
               }} sx={{width: '100%', margin: '2rem 0 2rem'}}
               slots={{field: SingleInputDateRangeField}} label='Date range' />
            </LocalizationProvider>

            <TextField label='Description' variant='standard' fullWidth value={description}
             onChange={(e) => setDescription(e.target.value)} multiline minRows={3} />

            <div className='flex justify-center'>
              <LoadingButton variant='contained' loading={loading} loadingPosition='start'
              startIcon={<PostAddRounded />} sx={{textTransform: 'none',
              background: '#4285F4 !important', margin: '3rem'}}>
                Post
              </LoadingButton>
            </div>
          </form>
        </DialogContent>

        <DialogActions sx={{position: 'absolute', top: '0.5rem', right: '0.5rem',
         background: 'white', borderRadius: '2rem', padding: '0'}}>
          <IconButton color="error" onClick={() => setOpen(false)}>
            <CloseRounded color="error" />
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  )
}
