import mongoose from "mongoose"; //Imports Mongoose for our Database connection to MongoDB
import config from "config"; //Import Config file
import logger from "../utils/logger";

//Function to Connect to our MongoDB
async function connect() {
  const dburl = config.get<string>("dbURL");

  try {
    await mongoose.connect(dburl);
    logger.info("Database Connected");
  } catch (err) {
    logger.error("Could Not Connect to Database");
    process.exit(1);
  }
}

export default connect;
