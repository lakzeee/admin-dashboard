import mg from "mongoose";

const TransactionSchema = new mg.Schema(
  {
    userId: String,
    cost: String,
    products: {
      type: [mg.Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);

const Transaction = mg.model("Transaction", TransactionSchema);
export default Transaction;
