import { Express, Request, Response, NextFunction } from "express"; //Imports Express, Request and Response

//Create an instance of Express as our application
function routes(app: Express) {
  //Route Test
  app.get("/test", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      Message: "Route and Application Test Successful",
    });
  });
}

export default routes;
