import { User } from "../models/user.model.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";

//* Get Authenticated User Controller
export const getAuthUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return apiError(res, 404, "User Not Found.");
    }

    return apiResponse(res, 200, "User Found Successfully.", user);
  } catch (error) {
    console.log("Get Authenticated User Error: ", error);
    return apiError(
      res,
      500,
      "Something Went Wrong While Getting Authenticated User."
    );
  }
};
