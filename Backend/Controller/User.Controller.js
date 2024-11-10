import User from "../Model/User.Model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const signup=async(req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        const hashPassword=await bcryptjs.hash(password,10)
        const createUser=new User({
            fullname,
            email,
            password: hashPassword,
        });
        await createUser.save();
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createUser._id,
                fullname: createUser.fullname,
                email: createUser.email,
            },
        });    } catch (error) {
        console.log("Error "+error.message);
        res.status(500).json({message:"Internal server error"});
        
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Create a JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email, fullname: user.fullname },
            process.env.JWT_SECRET_KEY, // This should be an environment variable
            { expiresIn: '1h' } // Optional: Expiry time (1 hour in this example)
        );

        res.status(200).json({
            message: "Login successful",
            token, // Send token to the client
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};