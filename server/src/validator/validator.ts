import Joi from "joi";

const signUpDataSchema = Joi.object({
    names: Joi.string().required().messages({
        'string.empty': 'Names is required',
        'any.required': 'Names is required',
    }),
    email: Joi.string().email().required().messages({
        'string.empty': 'Email is required',
        'string.email': 'Email is invalid',
        'any.required': 'Email is required',
    }),
    password: Joi.string().min(6).required().messages({
            'string.empty': 'Password is required',
            'string.min': 'Password must be at least 6 characters',
            'any.required': 'Password is required',
        }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        'string.empty': 'Confirm Password is required',
        'any.required': 'Confirm Password is required',
        'any.only': 'Check your password',
    }),
})

export default {
    signUpDataSchema
}