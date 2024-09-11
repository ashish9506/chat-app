const connectDB = require("./dbConnection");

const init = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log("Error!!", error);
    process.exit(1);
  }
};

module.exports = init;
