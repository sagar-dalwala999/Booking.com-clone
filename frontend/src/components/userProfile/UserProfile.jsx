import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <Menu>
      <MenuHandler>
        <Button
          variant="text"
          className="p-2 text-white bg-transparent hover:bg-blue-800"
        >
          <span className="font-bold">User Profile</span>
        </Button>
      </MenuHandler>
      <MenuList className="bg-white text-black">
        <MenuItem
          onClick={() => {
            navigate("/my-account");
          }}
        >
          My Account
        </MenuItem>
        <MenuItem onClick={() => navigate("/my-account/trips-and-bookings")}>
          Bookings and Trips
        </MenuItem>
        <MenuItem onClick={() => navigate("/my-account/reviews")}>
          Reviews
        </MenuItem>
        <MenuItem onClick={() => navigate("/my-account/saved")}>Saved</MenuItem>
        <MenuItem>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserProfile;
