/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

const AdminEditStays = ({ stay, open, onClose, onSave }) => {
  const [editedStay, setEditedStay] = useState(stay);

  // Update state when prop changes
  React.useEffect(() => {
    setEditedStay(stay);
  }, [stay]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedStay((prev) => ({ ...prev, [name]: value }));
  };

  // Handle save button click
  const handleSave = () => {
    onSave(editedStay); // Pass updated data to parent
    onClose(); // Close modal
  };

  return (
    <Dialog open={open} handler={onClose}>
      <DialogHeader>Edit Stay</DialogHeader>
      <DialogBody>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={editedStay?.name || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Stay Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={editedStay?.location || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Location"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Price</label>
            <input
              type="text"
              name="price"
              value={editedStay?.price || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Price"
            />
          </div>
        </form>
      </DialogBody>
      <DialogFooter>
        <Button className="bg-gray-500 text-white me-2" onClick={onClose}>
          Cancel
        </Button>
        <Button className="bg-primary text-white" onClick={handleSave}>
          Save
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default AdminEditStays;
