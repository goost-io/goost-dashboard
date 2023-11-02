import React, { useState, useEffect } from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import { useSelector } from "react-redux";

export default function EditContentSingle({ open, setOpen, dataId }) {
  const [editedContent, setEditedContent] = useState(null);
  const { contents } = useSelector((state) => state.singleContent);

  useEffect(() => {
    if (contents && contents.length > 0 && dataId) {
      const selectedContent = contents.find((content) => content.id === dataId);
      setEditedContent(selectedContent);
    }
  }, [contents, dataId]);

  const handleEdit = () => {
    setOpen(false);
  };

  if (!editedContent) {
    return null; // Seçili içerik yoksa modalı gösterme
  }

  return (
    <React.Fragment>
      <Modal keepMounted open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Edit Content</DialogTitle>
          <DialogContent>
            <div>
              <Input
                value={editedContent.title}
                onChange={(e) =>
                  setEditedContent({ ...editedContent, title: e.target.value })
                }
                placeholder='Title'
                margin='normal'
              />
            </div>
            <div>
              <Input
                value={editedContent.type}
                onChange={(e) =>
                  setEditedContent({ ...editedContent, type: e.target.value })
                }
                placeholder='Type'
                margin='normal'
              />
            </div>
            <div>
              <Textarea
                value={editedContent.content}
                onChange={(e) =>
                  setEditedContent({
                    ...editedContent,
                    content: e.target.value,
                  })
                }
                placeholder='Content'
                minRows={3}
                margin='normal'
              />
            </div>
            <div style={{ marginTop: 20 }}>
              <Button variant='contained' color='primary' onClick={handleEdit}>
                Edit
              </Button>
            </div>
          </DialogContent>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
