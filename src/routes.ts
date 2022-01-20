import { Express, Request, Response, NextFunction } from "express"; //Imports Express, Request and Response
import { Mongoose } from "mongoose";
import connect from "./utils/connection";
import User from "./schema/userSchema";
import shuffleAssets from "./controllers/shuffleAssets";

//Create an instance of Express as our application
function routes(app: Express) {
  //Route Test
  app.get("/test", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      Message: "Route and Application Test Successful",
    });
  });

  //User Assets
  var arr = [
    "BTC",
    "DOGE",
    "FTM",
    "APX",
    "BSD",
    "GTH",
    "JAS",
    "LMAO",
    "LOL",
    "PSI",
    "SPS",
    "SLS",
    "DFD",
    "HDJ",
  ];

  //Create User 
  app.post(
    "/user/create",
    (req: Request, res: Response, next: NextFunction) => {
      const newUser = new User({
        userId: "010",
        name: "Rand Name10",
        email: "test10@gmail.com",
        userAssets: [arr],
        userWalletBalance: 1000000,
        createdAt: new Date(),
      });

      try {
        newUser.save();
        console.log(newUser);
        res.status(500).json({
          Message: "User Successfully Created",
        });
      } catch (error) {
        console.error();
        res.status(400).json(error);
      }
    }
  );
}

//Delete User(Can only be called by Level 2 CX agents)
//Update User Information(Can only be called by Level 2 CX Agents)
//Report User for Fraud(Can be called by all level CX Agents)

export default routes;
