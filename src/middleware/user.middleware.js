import * as userRepo from '../repos/user.repo.js';

export const userExists = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id || typeof id !== 'string') {
            return res.status(400).json({ message: 'Invalid user ID' });
        }
        const {email} = req.body;
        if (!email || typeof email !== 'string') {
            return res.status(400).json({ message: 'Invalid email format' });
        }
        const user = await userRepo.getUserById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        req.user = user;
        next();
    } catch (err) {
        console.error('Error in userExists middleware:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
