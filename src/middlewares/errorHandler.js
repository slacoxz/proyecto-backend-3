export const errorHandler = (err, req, res, next) => {
  console.error(`[${err.code || 'ERROR'}]: ${err.message}`)
  res.status(400).json({
    status: 'error',
    error: {
      name: err.name,
      message: err.message,
      code: err.code,
      cause: err.cause
    }
  })
}
