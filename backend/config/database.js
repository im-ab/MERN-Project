const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,   // here we use this to connecting to the database
    })
    .then((data) => {
      console.log(`MongoDB Connected with sever: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
