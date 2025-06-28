import userRepo from '../repos/user.repo.js';

export const userExists = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id || typeof id !== 'string') {
            return res.status(400).json({ message: 'Invalid user ID' });
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

export const validateCreateUser = (req, res, next) => {
    const { name, email, password } = req.body;

    const errors = [];

    if (!name || typeof name !== 'string' || name.trim().length < 3) {
        errors.push('Name must be at least 3 characters long');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errors.push('A valid email is required');
    }
    if (!password || typeof password !== 'string' || password.length < 6) {
        errors.push('Password must be at least 6 characters long');
    }
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

export const validateUpdateUser = (req, res, next) => {
    const { name, email, password } = req.body;
    const errors = [];
    if (name && (typeof name !== 'string' || name.trim().length < 3)) {
        errors.push('Name must be at least 3 characters long');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        errors.push('Invalid email format');
    }
    if (password && (typeof password !== 'string' || password.length < 8)) {
        errors.push('Password must be at least 6 characters long');
    }
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    next();
};
