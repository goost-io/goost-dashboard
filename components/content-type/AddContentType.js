import React, {useState} from "react";
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
import {useDispatch} from "react-redux";
import {singleContentCreate} from "@/redux/single-content/content.create";
import {toast} from "react-toastify";

export default function AddContentType() {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(singleContentCreate({type, description})).unwrap().then(() => {
            setOpen(false);
            toast.success("İçerik Tipi Eklendi");
        }).catch((err) => {
            setOpen(true);
            toast.error("Bir Hata Oluştu");
        });
        setOpen(false);
    };

    return (
        <>
            <Button
                variant='outlined'
                color='neutral'
                startIcon={<Add/>}
                onClick={() => setOpen(true)}>
                Yeni İçerik Tipi
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>Yeni İçerik Tipi Ekle</DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={2}>
                                <FormControl>
                                    <FormLabel>Tip</FormLabel>
                                    <Input autoFocus onChange={e => setType(e.target.value)}/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Açıklama</FormLabel>
                                    <Input onChange={e => setDescription(e.target.value)} required/>
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
