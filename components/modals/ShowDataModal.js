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

  const modalContentStyle = {
    maxWidth: "600px",
    width: "90%",
    margin: "0 auto",
  };

  const textareaStyle = {
    width: "100%",
    minHeight: "50px",
    fontSize: "16px",
    padding: "8px",
    boxSizing: "border-box",
  };

  if (!showData) {
    return null; // If there's no data to show, don't display the modal
  }

  return (
    <React.Fragment>
      <Modal keepMounted open={open} onClose={() => setOpen(false)}>
        <ModalDialog style={modalContentStyle}>
          <DialogTitle>Show Content</DialogTitle>
          <DialogContent>
            {fields.map((field) => (
              <div key={field}>
                <div>
                  <label>{field}</label>
                </div>

                <TextareaAutosize
                  value={showData[field]}
                  placeholder={field}
                  style={textareaStyle}
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
