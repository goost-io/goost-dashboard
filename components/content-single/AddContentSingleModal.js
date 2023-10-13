import React, {Component, useState} from "react";
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
import {TinyMceEditor} from "../TinyMceEditor";
import {useDispatch} from "react-redux";
import {singleContentCreate} from "@/redux/single-content/content.create";
export default function AddContentSingleModal() {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(singleContentCreate({title, type, content})).unwrap().then(() => {
            console.log("slice worked")
        }).catch((err) => {
            console.log(err)
        });
        setOpen(false);
    };

    return (
        <>
            <Button
                variant='outlined'
                color='neutral'
                startIcon={<Add />}
                onClick={() => setOpen(true)}>
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
                                <Input autoFocus onChange={e => setTitle(e.target.value)}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Tip</FormLabel>
                                <Input onChange={e => setType(e.target.value)} required />
                            </FormControl>
                            <FormControl>
                                <FormLabel>İçerik</FormLabel>
                                <TinyMceEditor onChange={e => setContent(e)}/>
                            </FormControl>
                            <Button type='submit'>Submit</Button>
                        </Stack>
                    </form>
                    </DialogContent>
                </ModalDialog>
            </Modal>
        </>
    );
}
