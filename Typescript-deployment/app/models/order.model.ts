import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
    items: [
        { 
            product: { type: Schema.Types.ObjectId, ref: 'Product'},
            amount: { type: Number }
        }
    ]
});

export default mongoose.model("Order", OrderSchema);