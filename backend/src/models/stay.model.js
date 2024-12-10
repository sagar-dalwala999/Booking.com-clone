import { types } from "joi";
import mongoose from "mongoose";

const staySchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Property name
    description: { type: String, required: true }, // Detailed description
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
      postalCode: { type: String, required: true },
    },
    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], required: true }, // [longitude, latitude]
    },
    images: [{ type: String, required: true }], // URLs of property images
    propertyType: { type: String, required: true }, // e.g., Hotel, Apartment, Villa
    locationType: { type: String, required: true }, // e.g., City, Beach, Mountain
    pricePerNight: { type: Number, required: true },
    maxGuests: { type: Number, required: true },
    currency: { type: String, default: "INR" },
    numberOfRooms: { type: Number, required: true },
    amenities: [
      {
        name: { type: String, required: true }, // e.g., Free WiFi, Pool, Parking
        isAvailable: { type: Boolean, default: true },
      },
    ],
    rating: {
      average: { type: Number, default: 0 },
      reviews: [
        {
          user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          comment: { type: String },
          rating: { type: Number, min: 1, max: 5 },
          date: { type: Date, default: Date.now },
        },
      ],
    },
    pricing: [
      {
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        pricePerNight: { type: Number, required: true },
      },
    ],
    availability: [
      {
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
      },
    ],
    rules: [
      {
        rule: { type: String, required: true }, // e.g., No smoking, No pets
      },
    ],
    cancellationPolicy: { type: String, required: true }, // e.g., Free cancellation until 24 hours before check-in
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [{ type: String }], // e.g., Luxury, Beachfront, Family-Friendly
    featured: { type: Boolean, default: false }, // Whether the stay is featured on the homepage
    status: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
    },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
    notifications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Notification" },
    ],

    numberOfGuests: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: ["pay at property", "pay online", "cash"],
      default: "pay at property",
    },
    isVerified: { type: Boolean, default: false },
    views: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

// Index for geospatial queries
staySchema.index({ location: "2dsphere" });

export const Stay = mongoose.model("Stay", staySchema);
