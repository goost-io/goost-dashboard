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
    minHeight: "50px", // Yüksekliği artırabilirsiniz
  };

  const formattedUpdatedAt = editedData.updatedAt
    ? new Date(editedData.updatedAt).toLocaleString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      })
    : "";

  const formattedCreatedAt = editedData.createdAt
    ? new Date(editedData.createdAt).toLocaleString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      })
    : "";

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Modal keepMounted open={open} onClose={handleClose}>
        <ModalDialog style={modalContentStyle}>
          <DialogTitle>Edit Content</DialogTitle>
          <DialogContent>
            {Object.keys(editedData)
              .filter(
                (field) =>
                  field !== "id" &&
                  field !== "updatedAt" &&
                  field !== "createdAt"
              ) // id, updatedAt ve createdAt alanlarını filtreledim okunur bir şekilde yazalım diye
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
            {formattedUpdatedAt && (
              <div>
                <div>
                  <label>Updated At</label>
                </div>
                <TextareaAutosize
                  value={formattedUpdatedAt}
                  readOnly
                  style={textareaStyle}
                />
              </div>
            )}
            {formattedCreatedAt && (
              <div>
                <div>
                  <label>Created At</label>
                </div>
                <TextareaAutosize
                  value={formattedCreatedAt}
                  readOnly
                  style={textareaStyle}
                />
              </div>
            )}
            <div style={{ marginTop: 20 }}>
              <Button variant='contained' onClick={handleEditLocal}>
                Edit
              </Button>
              <Button
                variant='contained'
                color='secondary'
                onClick={handleClose}>
                Close
              </Button>
            </div>
            <div style={{ marginTop: 10 }}></div>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
