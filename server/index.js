const express = require("express");
const dotenv = require("dotenv");
const init = require("./boot/init");
const routes = require("./routes");

const app = express();
const envFile = `.env.${process.env.NODE_ENV || "local"}`;
dotenv.config({ path: envFile });

const PORT = process.env.PORT || 3001;

init();

app.use("/v1", routes);

app.get("/", (req, res) => {
  res.send("Hello from the API");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
