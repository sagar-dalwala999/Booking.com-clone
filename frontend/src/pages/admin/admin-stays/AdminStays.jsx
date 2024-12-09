import AdminAddStays from "../../../modules/admin/admin-stays/AdminAddStays";
import AdminFetchStays from "../../../modules/admin/admin-stays/AdminFetchStays";

const AdminStays = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-6">
      {/* Add Stay Button */}
      {/* <div className="flex justify-end py-10">
        <button className="bg-[#1d4ed8] rounded px-4 py-2 text-white">
          Add Stays
        </button>
      </div> */}

      <AdminAddStays />
      <AdminFetchStays />
    </div>
  );
};

export default AdminStays;
