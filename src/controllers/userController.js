const { User } = require("../models");


exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            message: "User berhasil ditambahkan",
            data: user
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

        await user.update(req.body);
        res.json({ message: "User berhasil diupdate", data: user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

        await user.destroy();
        res.json({ message: "User berhasil dihapus" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
