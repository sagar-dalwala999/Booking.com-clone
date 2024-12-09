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
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
    images: [{ type: String, required: true }], // URLs of property images
    propertyType: { type: String, required: true }, // e.g., Hotel, Apartment, Villa
    pricePerNight: { type: Number, required: true },
    currency: { type: String, default: "USD" },
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
      hostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      name: { type: String, required: true },
      contact: { type: String, required: true },
    },
    tags: [{ type: String }], // e.g., Luxury, Beachfront, Family-Friendly
    featured: { type: Boolean, default: false }, // Whether the stay is featured on the homepage
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Stay = mongoose.model("Stay", staySchema);
