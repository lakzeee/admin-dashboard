import mg from "mongoose";

const AffiliateSchema = new mg.Schema(
  {
    userId: { type: mg.Types.ObjectId, ref: "User" },
    affiliateSales: {
      type: [mg.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);

const Affiliate = mg.model("Affiliate", AffiliateSchema);
export default Affiliate;
