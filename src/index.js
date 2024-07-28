const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
setupAndStartServer();
