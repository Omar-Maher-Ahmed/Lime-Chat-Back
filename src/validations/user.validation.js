import joi from 'joi';

export const userUpdateSchema = {
    body: joi.object({
        name: joi.string().pattern(/[a-zA-Z\u0621-\u064Aء-ئ][^#&<>\"~;$^%{}?]{1,20}$/).optional(),
        email: joi.string().email({ minDomainSegments: 2, maxDomainSegments: 4, tlds: { allow: ['com', 'net', 'org', 'eg', 'edu', 'yahoo'] } }).optional(),
        password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).min(6).optional()
    })
};

export const userDeleteSchema = {
    body: joi.object({
        email: joi.string().email({ minDomainSegments: 2, maxDomainSegments: 4, tlds: { allow: ['com', 'net', 'org', 'eg', 'edu', 'yahoo'] } }).required(),
        password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).min(6).required()
    })
};






