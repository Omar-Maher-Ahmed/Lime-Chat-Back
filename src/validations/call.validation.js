import joi from 'joi';

export const startCallSchema = {
    body: joi.object({
        caller: joi.string().required(),
        receiver: joi.string().required(),
        type: joi.string().valid('audio', 'video').required(),
        roomId: joi.string().required(),
        startedAt: joi.date().required(),
    })
}

export const endCallSchema = {
    body: joi.object({
        caller: joi.string().required(),
        receiver: joi.string().required(),
        type: joi.string().valid('audio', 'video').required(),
        roomId: joi.string().required(),
        endedAt: joi.date().required(),
    })
}

export const createCallHistorySchema = {
    body: joi.object({
        caller: joi.string().required(),
        receiver: joi.string().required(),
        type: joi.string().valid('audio', 'video').required(),
        roomId: joi.string().required(),
        startedAt: joi.date().required(),
        endedAt: joi.date().optional()
    })
}
export const deleteCallHistorySchema = {
    params: joi.object({
        id: joi.string().required()
    })
}
