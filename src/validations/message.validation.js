import joi from 'joi';

export const sendMessage = {
    body: joi.object({
        sender: joi.string().required(),
        receiver: joi.string().optional(),
        room: joi.string().required(),
        content: joi.string().min(1).max(1000).optional().required(),
        audio: joi.string().optional(),
        type: joi.string().valid('text', 'audio').default('text')
    }),
    params: joi.object({
        id: joi.string().required()
    })
};

export const updateMessage = {
    body: joi.object({
        id: joi.string().required(),
        content: joi.string().min(1).max(1000).optional(),
        audio: joi.string().optional(),
        type: joi.string().valid('text', 'audio').default('text')
    }),
    params: joi.object({
        id: joi.string().required(),
        messageId: joi.string().required()
    })
}


export const deleteMessage = {
    body: joi.object({
        id: joi.string().required(),
        content: joi.string().min(1).max(1000).optional(),
        audio: joi.string().optional(),
        type: joi.string().valid('text', 'audio').default('text').required()
    }),
    params: joi.object({
        id: joi.string().required(),
        messageId: joi.string().required()
    })
}

