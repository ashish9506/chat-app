const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const init = require("./boot/init");
const routes = require("./routes");

const app = express();
app.use(express.json());

const envFile = `.env.${process.env.NODE_ENV || "local"}`;
dotenv.config({ path: envFile });

const PORT = process.env.PORT || 3001;

init();

app.use("/v1", routes);

app.use(helmet());

app.use((err, req, res, next) => {
  console.error(err);
  if (!err.statusCode) {
    return res.status(500).send({ message: "Internal Server Error" });
  }

  return res
    .status(err.statusCode)
    .json({ code: err.statusCode, error_description: err.message });
});

app.get("/", (req, res) => {
  res.send("Hello from the API");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
