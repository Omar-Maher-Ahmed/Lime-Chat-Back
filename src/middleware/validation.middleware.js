

export const validationMiddelware = (schema) => {
    (req, res, next) => {
        //validation for login
        const loginResult = schema.validate(req.body, { abortEarly: false });
        if (loginResult.error) {
            return res.status(400).json({ message: "Validation Error", ERR: loginResult.error.details });
        }
        return next();
    }
}
