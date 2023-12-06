/* export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal server error";
  err.statusCode = err.statusCode || 500;

  console.log(err);

  if (err.code === 11000) {
    (err.message = `valor ${Object.keys(err.keyValue)} duplicado`),
      (err.statusCode = 400);
  }

  res.status(err.statusCode).json({ success: false, message: err.message });
}; */

