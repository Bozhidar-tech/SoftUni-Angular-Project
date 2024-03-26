import Membership from '../models/Membership.js';

export const getAllMemberships = async (req, res) => {
    try {
        const memberships = await Membership.find().sort({ title: 1 });
        res.status(200).json({
            success: true,
            message: "All memberships fetched successfully!",
            data: memberships
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch memberships!",
            error: error.message
        });
    }
};