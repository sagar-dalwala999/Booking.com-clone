/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

const AdminDeleteStays = ({ open, onClose, onDelete, stayName }) => {
  return (
    <Dialog open={open} handler={onClose} size="sm">
      <DialogHeader>Confirm Deletion</DialogHeader>
      <DialogBody divider>
        Are you sure you want to delete <strong>{stayName}</strong>? This action
        cannot be undone.
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="blue" onClick={onClose} className="mr-2">
          Cancel
        </Button>
        <Button variant="gradient" color="red" onClick={onDelete}>
          Delete
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default AdminDeleteStays;
