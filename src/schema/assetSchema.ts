import mongoose from "mongoose";

//Asset Interface
export interface AssetType extends mongoose.Document {
  assetName: string;
  assetAbbr: string;
  assetValue: number;
  assetQuantity: number;
  assetHolders: [];
}

const AssetSchema = new mongoose.Schema<AssetType>({
  assetName: { type: String },
  assetAbbr: { type: String },
  assetValue: { type: Number },
  assetQuantity: { type: Number },
  assetHolders: { type: [] },
});

const Asset = mongoose.model<AssetType>("Asset", AssetSchema);

export default Asset;
