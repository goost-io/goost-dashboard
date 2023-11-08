import * as React from "react";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { toast, ToastContainer } from "react-toastify";
export default function DeleteDataModal({
  open,
  setOpen,
  dataId,
  handleDelete,
}) {
  const handleDeleteLocal = () => {
    // Call the onSave callback to save changes
    handleDelete(dataId);
    setOpen(false);
  };
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant='outlined' role='alertdialog'>
          <DialogTitle>
            <WarningRoundedIcon />
            Onaylıyor musun ?
          </DialogTitle>
          <Divider />
          <DialogContent>Silmek istediğinizden emin misiniz ?</DialogContent>
          <DialogActions>
            <Button
              variant='solid'
              color='danger'
              onClick={() => handleDeleteLocal()}>
              Sil
            </Button>
            <Button
              variant='plain'
              color='neutral'
              onClick={() => setOpen(false)}>
              İptal Et
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </div>
  );
}
