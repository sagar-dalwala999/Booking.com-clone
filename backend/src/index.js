import dotenv from "dotenv";

import app from "./app.js";
import connectDB from "./db/connectDB.js";

dotenv.config();

connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(` 🚀 Server is running on port ${process.env.PORT}`);
  });
});

export default app;
