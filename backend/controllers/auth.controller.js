
const User = require("../model/User");
const generateToken = require("../utils/generateToken");

exports.register = async (req, res) => {
    try {

        const {
            name,
            email,
            password,
            role
        } = req.body;

        
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already registered"
            });
        }

       
        const user = await User.create({
            name,
            email,
            password,
            role: role || "Worker"
        });

        const token = generateToken(user);

        res.status(201).json({
            success: true,
            message: "Registration Successful",

            token,

            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }
};

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {

            return res.status(400).json({

                success: false,
                message: "Email and Password are required"

            });

        }

        
        const user = await User.findOne({ email }).select("+password");

        if (!user) {

            return res.status(401).json({

                success: false,
                message: "Invalid Email or Password"

            });

        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {

            return res.status(401).json({

                success: false,
                message: "Invalid Email or Password"

            });

        }

        const token = generateToken(user);

        res.status(200).json({

            success: true,

            message: "Login Successful",

            token,

            user: {

                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role

            }

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,
            message: "Server Error"

        });

    }

};