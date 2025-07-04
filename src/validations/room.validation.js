import joi from 'joi';

export const createRoomSchema = {
    body: joi.object({
        name: joi.string().pattern(/[a-zA-Z\u0621-\u064Aء-ئ][^#&<>\"~;$^%{}?]{1,20}$/).required(),
        isGroup: joi.boolean().default(false),
        participants: joi.array().items(joi.string().required()).required(),
        createdBy: joi.any().valid(joi.ref('name')).required().messages({'any.only': '"createdBy" must be equal to "name"'})
    })
};

export const updateRoomSchema = {
    body: joi.object({
        participants: joi.array().items(joi.string().required()).required(), name: joi.string().pattern(/[a-zA-Z\u0621-\u064Aء-ئ][^#&<>\"~;$^%{}?]{1,20}$/).required()
    })
}

export const deleteRoomSchema = {
    body: joi.object({
        name: joi.string().pattern(/[a-zA-Z\u0621-\u064Aء-ئ][^#&<>\"~;$^%{}?]{1,20}$/).required(),
    })
}
