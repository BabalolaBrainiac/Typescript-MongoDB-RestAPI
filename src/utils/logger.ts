import logger from "pino"; //Logs our requests to the console
import dayjs from "dayjs"; //Format the timestamp from the logger

const log = logger({
  base: {
    pid: false,
  },
  timestamp: () => `"time": ${dayjs().format()}`,
});

export default log;
