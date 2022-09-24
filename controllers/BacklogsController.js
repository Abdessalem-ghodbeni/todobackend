const Backlogs = require('../models/BacklogModel');

exports.ajouter = async (req, res) => {
    try {
        const newBacklog = new Backlogs({ ...req.body });
        await newBacklog.save();
        res.status(200).json(newBacklog);
    } catch (error) {
        res.status(500).json(error.message);

    }
}

exports.effacer = async (req, res) => {
    try {
        await Backlogs.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Deleted succefully" });
    } catch (err) {
        res.status(500).json(err.message);
    }
}

exports.modifier = async (req, res) => {
    try {
        const modifiertask = await Backlogs.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });
        res.status(200).json({ message: "updated successfuly", modifiertask });
    } catch (err) {
        res.status(500).json(err.message);
    }
}

exports.GetAllTasck = async (req, res) => {
    try {
        const allTasks = await Backlogs.find();
        res.status(200).json(allTasks);
    } catch (error) {
        res.status(500).json(error.message);
    }
}
