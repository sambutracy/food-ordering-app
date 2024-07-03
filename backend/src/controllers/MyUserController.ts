import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
    //check if the user exits
    //create user if it doesnt exits
    //return the user object to the caling client
    try {
        const { auth0id } = req.body;
        const existingUser = await User.findOne({ auth0id })

        if (existingUser) {
            return res.status(200).send();
        }

        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json(newUser.toObject());
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error creating user"});
        
    }

};
const updateCurrentUser = async(req: Request, res: Response) => {
    try {
        const { name, addressline1, country, city } = req.body;
        const user = await User.findById(req.userId);

        if(!user){
            return res.status(404).json({ message: "User not found" })
        }

       user.name = name;
       user.addressLine1 = addressline1;
       user.city = city;
       user.country = country;
       
       await user.save();

       res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error updating user"});    
    }
}
const getCurrentUser = async ( req: Request, res: Response) => {
    try {
        const currentUser = await User.findOne({ _id: req.userId });
        if (!currentUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(currentUser);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "something went wrong retry"});
    };
};

export default {
    createCurrentUser,
    updateCurrentUser,
    getCurrentUser,
};