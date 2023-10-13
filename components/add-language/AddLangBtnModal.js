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
import {languageSlice} from "@/redux/types/language/language.slice";
import {useDispatch} from "react-redux";
import {languageCreate} from "@/redux/types/language/language.create";

export default function AddLanguageModal() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("");
    const [code, setCode] = useState("");
    const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(languageCreate({language, code})).unwrap().then(() => {
        console.log("slice worked")
    }).catch((err) => {
        console.log(err)
    });
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
                <Input autoFocus required onChange={e => setLanguage(e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>Dil Kodu</FormLabel>
                <Input required onChange={e => setCode(e.target.value)}/>
              </FormControl>
              <Button type='submit'>Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
