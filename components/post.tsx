import * as React from 'react'
import { CloseRounded } from "@mui/icons-material";
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Slide } from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Post ({open, setOpen} : {open: boolean, setOpen: Function}) {
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
          <div>
            Form here!
          </div>
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
