const dataMethods = ['body', 'params'];

export const validationMiddleware = (schema) => {
    return (req, res, next) => {
        try {
            const validationErr = [];
            dataMethods.forEach(key => {
                console.log("validation middleware is running");
                if (schema[key]) {
                    const validationResult = schema[key].validate(req[key], { abortEarly: false });
                    if (validationResult.error) {
                        validationErr.push(validationResult.error.details);
                    }
                }
            });
            if (validationErr.length > 0) {
                return res.status(400).json({ message: "Validation Error", validationErr });
            }
            return next();
        } catch (err) {
            console.error("Validation middleware error:", err);
            return res.status(500).json({ message: "Error Server ", error: err.message });
        }
    };
};
