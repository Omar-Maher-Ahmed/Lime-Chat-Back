import * as userRepo from '../repos/user.repo.js';

export const getUserById = async (req, res) => {
    try {
        const user = await userRepo.getUserById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        const { password, ...data } = user._doc
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const me = async (req, res) => {
    try {
        const { password, ...data } = req.user._doc
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getValues = async (req, res) => {
    const data = await userRepo.getValues()
    return res.status(200).json(data);
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
        if (req.body.email) {
            const existEmail = await userRepo.getUserByEmail(req.body.email);

            if (existEmail && existEmail._id != req.user._id.toString()) return res.status(400).json({ message: 'Email already exists' });
        }

        const user = await userRepo.updateUser(req.user._id, req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await userRepo.deleteUser(req.params.id, req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}






