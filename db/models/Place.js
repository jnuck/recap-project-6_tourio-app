import mongoose from "mongoose";

const { Schema } = mongoose;

const placeSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  currency: String,
});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place;
