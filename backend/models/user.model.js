import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true }, // Full name of the user
    email: { type: String, required: true, unique: true }, // Email address
    password: { type: String, required: true }, // Encrypted password
    phone: { type: String, required: true }, // Phone number
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
      currency: { type: String, default: "USD" },
      language: { type: String, default: "en" }, // Preferred language
    },
    savedStays: [{ type: mongoose.Schema.Types.ObjectId, ref: "Stay" }], // Wishlist or saved stays
    bookings: [
      {
        stay: { type: mongoose.Schema.Types.ObjectId, ref: "Stay" },
        checkInDate: { type: Date, required: true },
        checkOutDate: { type: Date, required: true },
        guests: {
          adults: { type: Number, required: true },
          children: { type: Number, default: 0 },
          infants: { type: Number, default: 0 },
        },
        totalPrice: { type: Number, required: true },
        status: {
          type: String,
          enum: ["booked", "cancelled", "completed"],
          default: "booked",
        },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    reviews: [
      {
        stay: { type: mongoose.Schema.Types.ObjectId, ref: "Stay" },
        rating: { type: Number, min: 1, max: 5, required: true },
        comment: { type: String },
        date: { type: Date, default: Date.now },
      },
    ],
    notifications: [
      {
        type: { type: String, enum: ["booking", "review", "message"] }, // Notification type
        message: { type: String, required: true },
        isRead: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    verified: { type: Boolean, default: false }, // Email/Phone verification status
    resetPasswordToken: { type: String }, // For password reset
    resetPasswordExpires: { type: Date }, // Token expiry
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
