import React, { useEffect, useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import { TextareaAutosize } from "@mui/base";

export default function ShowDataModal({
  open,
  setOpen,
  dataId,
  fields, // An array of field names to edit
  data, // The data object containing the values for the fields
}) {
  const [showData, setShowData] = useState({});

  useEffect(() => {
    if (data && dataId) {
      const selectedData = data.find((item) => item.id === dataId);
      setShowData(selectedData);
    }
  }, [data, dataId]);

  const handleEdit = () => {
    // Call the onSave callback to save changes
    onSave(showData);
    setOpen(false);
  };

  if (!showData) {
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
                <div>
                  <label>{field}</label>
                </div>

                <TextareaAutosize
                  value={showData[field]}
                  placeholder={field}
                  margin='normal'
                  disabled
                />
              </div>
            ))}
          </DialogContent>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
