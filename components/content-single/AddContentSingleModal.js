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
import { singleContentCreate } from "@/redux/single-content/content.create";
import { toast } from "react-toastify";
import { Textarea } from "@mui/joy";

export default function AddContentSingleModal() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [language, setLanguage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(singleContentCreate({ title, type, language, content }))
      .unwrap()
      .then(() => {
        toast.success("İçerik Tipi Eklendi");
        setOpen(false);
        window.location.reload();
      })
      .catch((err) => {
        toast.error("Bir Hata Oluştu");
        setOpen(true);
      });
    setOpen(false);
  };

  return (
    <>
      <Button variant='outlined' color='neutral' onClick={() => setOpen(true)}>
        Yeni İçerik
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Yeni İçerik Ekle</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <FormControl>
                  <FormLabel>Başlık ( Zorunlu Değil )</FormLabel>
                  <Input
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Tip</FormLabel>
                  <Input onChange={(e) => setType(e.target.value)} required />
                </FormControl>
                <FormControl>
                  <FormLabel>Dil</FormLabel>
                  <Input
                    onChange={(e) => setLanguage(e.target.value)}
                    required
                  />
                </FormControl>
                {/*CK EDITOR*/}
                {/*<FormControl>*/}
                {/*    <FormLabel>İçerik</FormLabel>*/}
                {/*    <TinyMceEditor onChange={e => setContent(e)}/>*/}
                {/*</FormControl>*/}
                <FormControl>
                  <FormLabel>İçerik</FormLabel>
                  <Textarea
                    placeholder='Type in here…'
                    minRows={2}
                    onChange={e => setContent(e.target.value)}
                    sx={{
                      "&::before": {
                        display: "none",
                      },
                      "&:focus-within": {
                        outline: "2px solid var(--Textarea-focusedHighlight)",
                        outlineOffset: "2px",
                      },
                    }}
                  />
                </FormControl>
                <Button type='submit'>Ekle</Button>
              </Stack>
            </form>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </>
  );
}
