const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong MongoDB Id error
  if (err.name === "CastError") {
    const errMsg = `Resource not found. Invalid: ${err.path}`;

    err = new ErrorHandler(errMsg, 400);
  }

  res.status(err.statusCode).json({
    sucess: false,
    message: err.message,
  });
};
