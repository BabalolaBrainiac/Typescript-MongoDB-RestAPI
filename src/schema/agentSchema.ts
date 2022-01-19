import mongoose from 'mongoose'

//Agent Interface
export interface AgentType extends mongoose.Document {
    agentId: string;
    name: string;
    email: string;
    authLevel: number;
    isAdmin: boolean;
    lastLoggedIn: Date;
 }


const AgentSchema = new mongoose.Schema<AgentType>({
    agentId: {type: String},
    name: { type: String },
    email: { type: String },
    authLevel: { type: Number},
    isAdmin: { type: Boolean},
    lastLoggedIn: {type: Date}
})

const Agent = mongoose.model<AgentType>("Agent", AgentSchema)

export default Agent;