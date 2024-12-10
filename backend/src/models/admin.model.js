import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    businessName: { type: String }, // Business name for admin
    businessEmail: { type: String }, // Admin business email
    businessContact: { type: String }, // Admin business contact
    businessAddress: { type: String }, // Admin business address
    verificationStatus: { type: Boolean, default: false }, // Admin verification status
    verificationDocuments: [
      { type: String }, // Links to verification documents (e.g., business registration docs)
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Admin = mongoose.model("Admin", adminSchema);
