// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../../../context/AuthContextProvider";

import { Outlet } from "react-router-dom";
import NavBar from "../../../modules/navigation/NavBar";
import AdminNavigation from "../admin-navigation/AdminNavigation";

const AdminDashBoard = () => {
  //   const navigate = useNavigate();
  //   const { authUser } = useAuthContext();

  //   useEffect(() => {
  //     if (!authUser) {
  //       navigate("/admin/signin");
  //     }
  //   }, [authUser, navigate]);

  //   if (!authUser) return null; // Prevent rendering until redirection is complete

  //   if (authUser.role !== "admin") {
  //     return <div>Unauthorized access. You are not an admin.</div>;
  //   }

  return (
    <div>
      <main className="flex-grow">
        <NavBar userType="admin" />
        <AdminNavigation />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashBoard;
