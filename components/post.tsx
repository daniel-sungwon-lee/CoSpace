import * as React from 'react'
import { CloseRounded } from "@mui/icons-material";
import { Dialog, DialogActions, DialogTitle, IconButton, Slide } from "@mui/material";
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
       }} TransitionComponent={Transition}>
        <DialogTitle>Post a new Space</DialogTitle>

        <DialogActions sx={{position: 'absolute', top: '0.5rem', right: '0.5rem'}}>
          <IconButton color="error" onClick={() => setOpen(false)}>
            <CloseRounded color="error" />
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  )
}
