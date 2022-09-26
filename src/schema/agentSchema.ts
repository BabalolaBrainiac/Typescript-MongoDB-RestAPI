import mongoose from "mongoose";
import bcrypt from "bcrypt";
import connect from "../utils/connection";
import config from "config";
import { hasJSDocParameterTags } from "typescript";

//Agent Interface
export interface AgentType extends mongoose.Document {
  agentId: string;
  name: string;
  email: string;
  authLevel: number;
  password: string;
  isAdmin: boolean;
  lastLoggedIn: Date;
}

const agentSchema = new mongoose.Schema<AgentType>({
  agentId: { type: String },
  name: { type: String },
  email: { type: String },
  authLevel: { type: Number },
  password: { type: String },
  isAdmin: { type: Boolean },
  lastLoggedIn: { type: Date },
});

//Hash Agent Password before Saving in DB
agentSchema.pre("save", async function (next: mongoose.HookNextFunction) {
  let agent = this as AgentType;

  if (agent.isModified()) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get<number>("saltRound"));

  const hash = await bcrypt.hash(agent.password, salt);

  agent.password = hash;

  return hash;
});

const Agent = mongoose.model<AgentType>("Agent", agentSchema);

export default Agent;
