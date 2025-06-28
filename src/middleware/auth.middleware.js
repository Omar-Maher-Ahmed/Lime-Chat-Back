import jwt from 'jsonwebtoken';
import userRepo from '../repos/user.repo.js';

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer '))
        return res.status(401).json({ message: 'Unauthorized' });
    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userRepo = await userRepo.findById(decoded.id).select('-password');
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

export default authMiddleware;