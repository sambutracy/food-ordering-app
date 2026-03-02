import { Request, Response } from "express";
import User from "../models/user";

const getAdminSummary = async (req: Request, res: Response) => {
  try {
    const [users, admins] = await Promise.all([
      User.countDocuments({ role: "user" }),
      User.countDocuments({ role: "admin" }),
    ]);

    res.json({
      message: "Admin access granted",
      users,
      admins,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to load admin summary" });
  }
};

export default {
  getAdminSummary,
};
