require("dotenv").config();
const { default: mongoose } = require("mongoose");

const connection = {};

export const dbConnect = async () => {
  try {
    if (connection.isConnected) {
      console.log("Connected:using existing connection");
      return;
    }
    const db = await mongoose.connect(`${process.env.DATABASE_URL}`);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
