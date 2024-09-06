const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: {
    type: Number,
    min: [1, "wrong min price"],
    max: [10000, "wrong max price"],
  },
  discountPercentage: {
    type: Number,
    min: [1, "wrong min discount"],
    max: [99, "wrong max discount"],
  },
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [5, "wrong max price"],
    default: 0,
  },
  stock: { type: Number, min: [0, "wrong min stock"], default: 0 },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: { type: String, required: true },
  // colors: { type: [Schema.Types.Mixed] },
  // sizes: { type: [Schema.Types.Mixed] },
  //   highlights: { type: [String] },
  discountPrice: { type: Number },
  deleted: { type: Boolean, default: false },
});

// Create a virtual property 'id' that maps to '_id'
productSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure that virtuals are included in toJSON output and remove '_id'
productSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret) {
    ret.id = ret._id.toHexString(); // Ensure 'id' is set properly
    delete ret._id; // Remove '_id' field
    delete ret.__v; // Optionally remove the version key
  },
});

exports.Product = mongoose.model("Product", productSchema);
