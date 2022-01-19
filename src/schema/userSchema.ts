import mongoose from 'mongoose'

//User Interface
export interface UserType extends mongoose.Document {
    userId: string;
    name: string;
    email: string;
    userAssets: [] ;
    userWalletBalance: number;
    createdAt: Date;
 }


const userSchema = new mongoose.Schema<UserType>({
    userId: {type: String},
    name: { type: String },
    email: { type: String },
    userAssets: { type: [], ref: "Assets" },
    userWalletBalance: { type: Number, ref: "Wallet" },
    createdAt: {type: Date}
    
    
})

const User = mongoose.model<UserType>("User", userSchema)

export default User;