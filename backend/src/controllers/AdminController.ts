import { Request, Response } from "express";
import Restaurant from "../models/restaurant";
import User from "../models/user";
import { mockRestaurants } from "../data/mockRestaurants";

const getAdminSummary = async (_req: Request, res: Response) => {
  try {
    const [users, admins, restaurants] = await Promise.all([
      User.countDocuments({ role: "user" }),
      User.countDocuments({ role: "admin" }),
      Restaurant.countDocuments(),
    ]);

    return res.json({
      message: "Admin access granted",
      users,
      admins,
      restaurants,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to load admin summary" });
  }
};

const seedMockRestaurants = async (req: Request, res: Response) => {
  try {
    const docs = mockRestaurants.map((restaurant) => ({
      ...restaurant,
      user: req.userId,
      lastUpdated: new Date(),
      menuItems: restaurant.menuItems.map((item) => ({
        name: item.name,
        price: item.price,
      })),
    }));

    const operations = docs.map((restaurant) => ({
      updateOne: {
        filter: {
          restaurantName: restaurant.restaurantName,
          city: restaurant.city,
          country: restaurant.country,
        },
        update: { $set: restaurant },
        upsert: true,
      },
    }));

    const result = await Restaurant.bulkWrite(operations, { ordered: false });

    return res.status(200).json({
      message: "Mock restaurants seeded",
      matched: result.matchedCount,
      modified: result.modifiedCount,
      upserted: result.upsertedCount,
      totalSeedRows: docs.length,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to seed mock restaurants" });
  }
};

export default {
  getAdminSummary,
  seedMockRestaurants,
};
