import mongoose from 'mongoose'

//Transaction Interface
export interface TransType extends mongoose.Document {
    transactionId: string;
    userId: string;
    transactionStatus: string;
    transactionRef: string ;
    value: number;
    transactionDate: Date;

 }


const TransactionSchema = new mongoose.Schema<TransType>({
    transactionId: {type: String},
    userId: { type: String, ref: "User" },
    transactionStatus: { type: String },
    transactionRef: { type: String},
    value: { type: Number},
    transactionDate: {type: Date}
    
    
})

const Transaction = mongoose.model<TransType>("Transaction", TransactionSchema)

export default Transaction;