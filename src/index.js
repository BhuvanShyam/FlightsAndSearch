const express = require("express");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

const db = require('./models/index');

const setupAndStartServer = async () => {
  const app = express();

  // Use built-in middleware for parsing JSON and URL-encoded data
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    if (process.env.SYNC_DB) {
      await db.sequelize.sync({ alter: true });
      console.log('Database synchronized');
    }
  });
};
setupAndStartServer();
