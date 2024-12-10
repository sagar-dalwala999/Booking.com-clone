export const createAdmin = (req, res) => {
  try {
    const {  } = req.body;

    
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
