import mongoose from "mongoose";

const RideSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    from: String,
    to: String,
    date: String,
    time : String,
    seats: Number,
    price: Number,
    message: String,
  },
  { timestamps: true }
);

export default mongoose.models.Ride ||
  mongoose.model("Ride", RideSchema);

  