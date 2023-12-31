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
import { useDispatch } from "react-redux";
import { languageCreate } from "@/redux/types/language/language.create";
import { toast, ToastContainer } from "react-toastify";

export default function AddLanguageModal() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(languageCreate({ name: language, code: code }))
      .unwrap()
      .then(() => {
        setOpen(false);
        toast.success("İçerik Tipi Eklendi");
      })
      .catch((err) => {
        setOpen(true);
        toast.error("Bir Hata Oluştu");
      });
  };

  return (
    <>
      <ToastContainer position='top-right' autoClose={3000} />
      <Button variant='outlined' color='neutral' onClick={() => setOpen(true)}>
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
                <Input
                  autoFocus
                  required
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Dil Kodu</FormLabel>
                <Input required onChange={(e) => setCode(e.target.value)} />
              </FormControl>
              <Button type='submit'>Ekle</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
