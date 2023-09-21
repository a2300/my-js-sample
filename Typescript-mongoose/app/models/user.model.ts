import mongoose, { Schema, Types } from "mongoose";

const UserSchema = new Schema({
    name: { type: String, required: true },
    cart: {
        items: [
            { 
                product: { type: Schema.Types.ObjectId, ref: 'Product'},
                amount: { type: Number }
            }
        ],
        totalAmount: { type: Number }    
    },
    orders: [{
        items: [
            {
              product: { type: Schema.Types.ObjectId, ref: 'Product'},
              amount: { type: Number },
            },
          ],
          totalAmount: { type: Number },
    }]
});
export default mongoose.model("User", UserSchema);