import mg from "mongoose";

const ProductStatSchema = new mg.Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnit: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
  },
  { timestamps: true }
);

const ProductStat = mg.model("ProductStat", ProductStatSchema);
export default ProductStat;
