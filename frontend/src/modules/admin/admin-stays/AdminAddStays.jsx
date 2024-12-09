import { Drawer, Button, Typography, Input } from "@material-tailwind/react";
import { useState } from "react";

const AdminAddStays = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [stays, setStays] = useState([
    { id: 1, name: "Ocean View Villa", location: "Maldives", price: "$500" },
    { id: 2, name: "Mountain Cabin", location: "Switzerland", price: "$300" },
  ]);
  const [newStay, setNewStay] = useState({ name: "", location: "", price: "" });

  // Open/Close Drawer
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  // Handle Form Input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStay((prev) => ({ ...prev, [name]: value }));
  };

  // Add New Stay
  const handleAddStay = () => {
    const id = stays.length + 1; // Generate a new ID
    setStays((prev) => [...prev, { id, ...newStay }]);
    setNewStay({ name: "", location: "", price: "" }); // Reset form
    toggleDrawer(); // Close drawer
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-gray-700 font-bookingBold">Properties Details</h1>
        <Button className="bg-secondary text-white" onClick={toggleDrawer}>
          Add Stay
        </Button>
      </div>

      {/* Add Stay Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer}
        placement="right"
        size={500}
        className="p-4"
      >
        <div className="space-y-6">
          <Typography variant="h5" className="font-bold">
            Add New Stay
          </Typography>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <Input
                type="text"
                name="name"
                value={newStay.name}
                onChange={handleInputChange}
                label="Stay Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Location</label>
              <Input
                type="text"
                name="location"
                value={newStay.location}
                onChange={handleInputChange}
                label="Location"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Price</label>
              <Input
                type="text"
                name="price"
                value={newStay.price}
                onChange={handleInputChange}
                label="Price"
              />
            </div>
          </form>
          <div className="flex justify-end gap-2">
            <Button className="bg-gray-700/90 text-white" onClick={toggleDrawer}>
              Cancel
            </Button>
            <Button
              className="bg-secondary text-white"
              onClick={handleAddStay}
              disabled={!newStay.name || !newStay.location || !newStay.price}
            >
              Add Stay
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default AdminAddStays;
