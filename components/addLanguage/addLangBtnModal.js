import React, { useState } from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";

export default function AddLanguageButton() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  return (
    <>
      <Button
        variant='outlined'
        color='neutral'
        startIcon={<Add />}
        onClick={() => setOpen(true)}>
        Yeni Dil Ekle
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Yeni Dil Ekle</DialogTitle>
          <DialogContent>Dil bilgilerini doldurunuz.</DialogContent>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Dil İsmi</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Dil Kodu</FormLabel>
                <Input required />
              </FormControl>
              <Button type='submit'>Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
