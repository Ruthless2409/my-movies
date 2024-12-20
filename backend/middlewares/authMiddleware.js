import jwt from "jsonwebtoken";
import User from "../models/User.js";
import asyncHandler from "./asyncHandler.js";

//to check if user authenticated or not
const authenticate = asyncHandler(async (req,res,next) =>
{
    let token;
    token = req.cookies.jwt;

    if(token){
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user= await User.findById(decoded.userId).select("-password");
            next();
        }catch(error){
            res.status(401);
            throw new Error("Not authorised, token failed.");
        }
        
    }
    else
    {
        res.status(401);
        throw new Error("Not authorised , no token");
    }
});

//check if user admin or not

const authoriseAdmin = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        next();
    } else{
        res.status(401).send("Not authorised as admin");
    }
};

export { authenticate, authoriseAdmin }; 