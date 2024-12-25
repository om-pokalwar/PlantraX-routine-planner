import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (result.errors.length > 0) {
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};
export const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").isLength({ min: 8 })
        .withMessage("Password should contain atleast 8 characters"),
];
export const signupValidator = [
    ...loginValidator,
    body("name").notEmpty().withMessage("Name is required"),
];
//# sourceMappingURL=data-validators.js.map