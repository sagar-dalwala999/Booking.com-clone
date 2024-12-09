import { useState } from "react";
import DataTable from "react-data-table-component";
import AdminEditStays from "./AdminEditStays";
import AdminDeleteStays from "./AdminDeleteStays";

const AdminFetchStays = () => {
  // Static data for demonstration
  const [stays, setStays] = useState([
    { id: 1, name: "Ocean View Villa", location: "Maldives", price: "$500" },
    { id: 2, name: "Mountain Cabin", location: "Switzerland", price: "$300" },
    {
      id: 3,
      name: "City Center Apartment",
      location: "New York",
      price: "$400",
    },
    { id: 4, name: "Desert Retreat", location: "Dubai", price: "$600" },
    {
      id: 5,
      name: "Beachside Resort",
      location: "Maldives",
      price: "$1200",
    },
    {
      id: 6,
      name: "Mountain Retreat",
      location: "Swiss Alps",
      price: "$800",
    },
    {
      id: 7,
      name: "City Center Apartment",
      location: "New York",
      price: "$400",
    },
    {
      id: 8,
      name: "Desert Retreat",
      location: "Dubai",
      price: "$600",
    },
    {
      id: 9,
      name: "Beachside Resort",
      location: "Maldives",
      price: "$1200",
    },
    {
      id: 10,
      name: "Mountain Retreat",
      location: "Swiss Alps",
      price: "$800",
    },
    {
      id: 11,
      name: "City Center Apartment",
      location: "New York",
      price: "$400",
    },
    {
      id: 12,
      name: "Desert Retreat",
      location: "Dubai",
      price: "$600",
    },
  ]);

  const [selectedStay, setSelectedStay] = useState(null);
  const [editOpen, setEditOpen] = useState(false);

  //? Open edit modal and set selected stay
  const handleEditClick = (stay) => {
    setSelectedStay(stay);
    setEditOpen(true);
  };

  //? Save the updated stay
  const handleSaveStay = (updatedStay) => {
    setStays((prevStays) =>
      prevStays.map((stay) => (stay.id === updatedStay.id ? updatedStay : stay))
    );
  };

  const [deleteOpen, setDeleteOpen] = useState(false);

  // Open delete dialog
  const handleDeleteClick = (stay) => {
    setSelectedStay(stay);
    setDeleteOpen(true);
  };

  // Confirm deletion
  const handleDeleteStay = () => {
    setStays((prevStays) =>
      prevStays.filter((stay) => stay.id !== selectedStay.id)
    );
    setDeleteOpen(false);
  };

  // Table columns
  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Location", selector: (row) => row.location, sortable: true },
    { name: "Price", selector: (row) => row.price, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex justify-center">
          <button
            className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => handleEditClick(row)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => handleDeleteClick(row)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <DataTable
        columns={columns}
        data={stays}
        pagination
        highlightOnHover
        striped
        responsive
        pointerOnHover
        customStyles={{
          headRow: {
            style: {
              backgroundColor: "#1d4ed8",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.5em",
              textAlign: "center",
              padding: "8px",
            },
          },
          cells: {
            style: {
              padding: "8px",
              textAlign: "center",
              fontSize: "1.2em",
            },
          },
          headCells: {
            style: {
              padding: "8px",
            },
          },
          rows: {
            style: {
              backgroundColor: "#f9f9f9",
            },
          },
        }}
        className="shadow-md rounded-lg"
      />

      <AdminEditStays
        stay={selectedStay}
        open={editOpen}
        onClose={() => setEditOpen(false)}
        onSave={handleSaveStay}
      />

      <AdminDeleteStays
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onDelete={handleDeleteStay}
        stayName={selectedStay?.name}
      />
    </div>
  );
};

export default AdminFetchStays;
