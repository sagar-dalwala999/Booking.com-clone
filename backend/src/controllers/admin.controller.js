import { Admin } from "../models/admin.model.js";
import { apiError } from "../utils/apiError";

export const createAdmin = (req, res) => {
  try {
    const {
      businessName,
      businessEmail,
      businessContact,
      businessAddress,
      verificationStatus,
      verificationDocuments,
    } = req.body;

    if (
      [businessName, businessEmail, businessContact, businessAddress].some(
        (field) => field?.trim() === ""
      )
    ) {
      apiError(res, 400, "Please Provide All The Required Fields.");
    }

    const existingAdmin = User.findOne({ businessEmail });

    if (existingAdmin) {
      return apiError(res, 400, "Admin Already Exists.");
    }

    const admin = Admin.create({
      businessName,
      businessEmail,
      businessContact,
      businessAddress,
      verificationStatus,
      verificationDocuments,
    });

    if (!admin) {
      return apiError(res, 500, "Something Went Wrong While Creating Admin.");
    }

    return apiResponse(res, 200, "Admin Created Successfully.", admin);
    
  } catch (error) {
    console.log("Create Admin Error: ", error);
    return apiError(res, 500, "Something Went Wrong While Creating Admin.");
  }
};

export const deleteAdmin = (req, res) => {
  res.send("delete admin");
};

export const updateAdmin = (req, res) => {
  res.send("update admin");
};

export const getAdmin = (req, res) => {
  res.send("get admin");
};

export const getAdmins = (req, res) => {
  res.send("get admins");
};

export const loginAdmin = (req, res) => {
  res.send("login admin");
};

export const logoutAdmin = (req, res) => {
  res.send("logout admin");
};
