import userRepo from '../repos/user.repo.js';

export const createUser = async (req, res) => {
    try {
        const user = await userRepo.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await userRepo.getUserById(req.params.id);
        res.json(user);
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

export const updateUser = async (req,res)=>{
    try {
        const user = await userRepo.updateUser(req.params.id, req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteUser = async (req,res)=>{
    try {
        const user = await userRepo.deleteUser(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}






