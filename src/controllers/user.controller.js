import * as userRepo from '../repos/user.repo.js';

export const getUserById = async (req, res) => {
    try {
        const user = await userRepo.getUserById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
export const me = async (req, res) => {
    try {
        res.json(req.user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
export const getUsers = async (req, res) => {
    try {
        const users = await userRepo.getUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await userRepo.updateUser(req.params.id, req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await userRepo.deleteUser(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}






