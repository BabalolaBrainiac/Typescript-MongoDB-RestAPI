import { Express, Request, Response, NextFunction } from "express"; //Imports Express, Request and Response
import { Mongoose } from "mongoose";
import connect from "./utils/connection";
import Agent from "../schema/agentSchema";