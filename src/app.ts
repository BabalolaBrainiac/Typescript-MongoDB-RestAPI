import express, { Application, Request, NextFunction } from "express"; //imports the express framework
import config from "config";
import connect from "./utils/connection"; //imports DB connection
import logger from "./utils/logger";
import routes from "./routes"; //imports routes

const app = express();
const port = config.get<number>("port");

app.listen(port, async () => {
  logger.info(`Listening on ${port}`);

  await connect();
  routes(app);
});
