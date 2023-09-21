import mongoose, { Schema, Types } from "mongoose";

const UserSchema = new Schema({
    name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    role: {type: String},

    cart: { type: Schema.Types.ObjectId, ref: 'Cart'},

    orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
});
export default mongoose.model("User", UserSchema);