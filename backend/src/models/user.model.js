import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true }, // Full name of the user
    email: { type: String, required: true, unique: true }, // Email address
    password: { type: String, required: true }, // Encrypted password
    phone: { type: String, unique: true, sparse: true }, // Phone number
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      postalCode: { type: String },
    },
    profilePicture: { type: String }, // URL of the profile picture
    role: { type: String, enum: ["user", "host", "admin"], default: "user" }, // Role of the user
    preferences: {
      currency: { type: String, default: "INR" },
      language: { type: String, default: "en" }, // Preferred language
      notifications: {
        email: { type: Boolean, default: true }, // Enable email notifications
        push: { type: Boolean, default: true }, // Enable push notifications
      },
    },
    savedStays: [{ type: mongoose.Schema.Types.ObjectId, ref: "Stay" }], // Wishlist or saved stays
    bookings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
      },
    ],
    history: [
      {
        stay: { type: mongoose.Schema.Types.ObjectId, ref: "Stay" }, // Reference to the stay
      },
    ],
    reviews: [
      {
        stay: { type: mongoose.Schema.Types.ObjectId, ref: "Stay" },
        rating: { type: Number, min: 1, max: 5 },
        comment: { type: String },
        date: { type: Date, default: Date.now },
      },
    ],
    notifications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Notification" },
    ],

    verified: { type: Boolean, default: false }, // Email/Phone verification status
    resetPasswordToken: { type: String }, // For password reset
    resetPasswordExpires: { type: Date }, // Token expiry
    isActive: { type: Boolean, default: true }, // Account active status
    socialAccounts: {
      googleId: { type: String },
      facebookId: { type: String },
    },
    lastLogin: { type: Date }, // Track the last login time
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    console.error("Error hashing password: ", error);
    next(error);
  }
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      fullName: this.fullName,
      email: this.email,
      role: this.role,
    },
    process.env.AUTH_TOKEN_SECRET,
    {
      expiresIn: process.env.AUTH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
