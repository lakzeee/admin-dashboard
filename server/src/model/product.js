import mg from "mongoose";

const ProductSchema = new mg.Schema(
  {
    name: String,
    price: String,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const Product = mg.model("Product", ProductSchema);
export default Product;
