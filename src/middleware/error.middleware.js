export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    return res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
};