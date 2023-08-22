import { Dialog, DialogTitle } from "@mui/material";

export default function Post ({open, setOpen} : {open: boolean, setOpen: Function}) {
  return (
    <>
      <Dialog fullScreen open={open} onClose={()=> setOpen(false)}>
        <DialogTitle>Post a new Space</DialogTitle>

      </Dialog>
    </>
  )
}
