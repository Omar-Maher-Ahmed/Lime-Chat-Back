import jwt from 'jsonwebtoken';
import * as userRepo from '../repos/user.repo.js';

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer '))
        return res.status(401).json({ message: 'Unauthorized' });
    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // res.json({ message: 'Token is valid', userId: decoded.id });
        const user = await userRepo.getUserById(decoded.id)//.select('-password');
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({ message: 'Invalid token' });
    }
};

export default authMiddleware;