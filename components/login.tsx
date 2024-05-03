import { Dialog, DialogTitle } from "@mui/material";
import { useState } from "react";

export default function Login({open, setOpen, password, setPassword,
  username, setUsername}) {

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Login</DialogTitle>

      </Dialog>
    </>
  )
}
