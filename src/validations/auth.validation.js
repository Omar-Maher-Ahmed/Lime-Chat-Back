import joi from 'joi';


export const register = {
    body: joi.object({
        name: joi.string().pattern(/[a-zA-Z\u0621-\u064Aء-ئ][^#&<>\"~;$^%{}?]{1,20}$/).required(),
        email: joi.string().email({ minDomainSegments: 2, maxDomainSegments: 4, tlds: { allow: ['com', 'net', 'org', 'eg', 'edu', 'yahoo'] } }).required(),
        password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).min(6).required()
    })
};

export const login = {
    body: joi.object({
        email: joi.string().email({ minDomainSegments: 2, maxDomainSegments: 4, tlds: { allow: ['com', 'net', 'org', 'eg', 'edu', 'yahoo'] } }).required(),
        password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).min(6).required()
    })
};