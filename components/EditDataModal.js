import React, {useEffect, useState} from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Input from "@mui/joy/Input";

export default function EditDataModal({
                                              open,
                                              setOpen,
                                              dataId,
                                              fields, // An array of field names to edit
                                              data, // The data object containing the values for the fields
                                          }) {
    const [editedData, setEditedData] = useState({});

    useEffect(() => {
        if (data && dataId) {
            const selectedData = data.find((item) => item.id === dataId);
            setEditedData(selectedData);
        }
    }, [data, dataId]);

    const handleEdit = () => {
        // Call the onSave callback to save changes
        setOpen(false);
    };

    if (!editedData) {
        return null; // If there's no data to edit, don't display the modal
    }

    return (
        <React.Fragment>
            <Modal keepMounted open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>Edit Content</DialogTitle>
                    <DialogContent>
                        {fields.map((field) => (
                            <div key={field}>
                                <Input
                                    value={editedData[field]}
                                    onChange={(e) =>
                                        setEditedData({...editedData, [field]: e.target.value})
                                    }
                                    placeholder={field}
                                    margin="normal"
                                />
                            </div>
                        ))}
                        <div style={{marginTop: 20}}>
                            <Button variant="contained" color="primary" onClick={handleEdit}>
                                Edit
                            </Button>
                        </div>
                    </DialogContent>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}
