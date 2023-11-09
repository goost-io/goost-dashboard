import React, { useEffect, useState } from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import { TextareaAutosize } from "@mui/base";

export default function EditDataModal({
  open,
  setOpen,
  dataId,
  data, // Veritabanından gelen veri nesnesi
  handleEdit,
}) {
  const [editedData, setEditedData] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (data && dataId) {
      const selectedData = data.find((item) => item.id === dataId);
      setEditedData(selectedData);
    }
  }, [data, dataId]);

  const handleEditLocal = () => {
    // Call the onSave callback to save changes
    handleEdit(editedData);
    setSnackbarOpen(true);
    setOpen(false);
  };

  if (!editedData) {
    return null; // If there's no data to edit, don't display the modal
  }

  const modalContentStyle = {
    maxWidth: "600px",
    width: "90%",
    margin: "0 auto",
  };

  const textareaStyle = {
    width: "100%",
    minHeight: "50px",
  };

  const editButtonStyle = {
    marginTop: "20px",
    backgroundColor: "green",
    color: "white",
    "&:hover": {
      backgroundColor: "darkgreen",
    },
  };

  return (
    <React.Fragment>
      <Modal keepMounted open={open} onClose={() => setOpen(false)}>
        <ModalDialog style={modalContentStyle}>
          <DialogTitle>Edit Content</DialogTitle>
          <DialogContent>
            {Object.keys(editedData)
              .filter((field) => field !== "id") // id alanını filtrele
              .map((field) => (
                <div key={field}>
                  <div>
                    <label>{field}</label>
                  </div>

                  <TextareaAutosize
                    onChange={(e) =>
                      setEditedData({ ...editedData, [field]: e.target.value })
                    }
                    value={editedData[field]}
                    placeholder={field}
                    style={textareaStyle}
                  />
                </div>
              ))}
            <div style={{ marginTop: 20 }}>
              <Button
                variant='contained'
                style={editButtonStyle}
                onClick={handleEditLocal}>
                Edit
              </Button>
            </div>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
