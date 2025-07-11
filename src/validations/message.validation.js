import joi from 'joi';

export const sendMessage = {
    body: joi.object({
        // sender: joi.string().required(),
        receiver: joi.string().required(),
        room: joi.string().required(),
        content: joi.string().min(1).max(1000).optional().required(),
        audio: joi.string().optional(),
        type: joi.string().valid('text', 'audio').default('text')
    }),
};

export const updateMessage = {
    body: joi.object({
        id: joi.string().required(),
        content: joi.string().min(1).max(1000).optional(),
        audio: joi.string().optional(),
        type: joi.string().valid('text', 'audio').default('text'),
        messageId: joi.string().required(),
    }),
}


// export const deleteMessage = {
//     params:{
//         id: joi.string().required()
//     }
// }

