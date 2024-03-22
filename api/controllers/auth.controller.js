import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import { CreateSuccess} from "../utils/success.js";
import { CreateError } from "../utils/error.js";
import UserToken from "../models/UserToken.js";

export const register = async (req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: hashPassword,
    });
    await newUser.save();
    return next(CreateSuccess(200), "User Registered successfully!")
};

export const registerAdmin = async (req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: hashPassword,
        isAdmin: true,
    });
    await newUser.save();
    return next(CreateSuccess(200), "Admin Registered successfully!")
};

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "Invalid email address"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({
                status: 401,
                message: "Invalid password!"
            });
        }

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin, roles: user.roles },
            process.env.JWT_SECRET
        );
         res.status(200).json({
                status: 200,
                message: "Login successful!",
                data: user, 
                token
            });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Something went wrong!"
        });
    }
};

export const sendEmail = async (req, res, next) => {
    const email = req.body.email;
    const user = await User.findOne({email: {$regex: '^'+email+'$', $options: 'i'}});

    if(!user){
        return next(CreateError(404, "User not found!"));
    }
    const payload ={
        email: user.email
    }
    const expiryTime = 300;
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: expiryTime});
    const newToken = new UserToken({
        userId: user._id,
        token: token
    });

    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "bozhidar.nunev@gmail.com",
            pass: ""
        }
    });

    let mailDetails = {
        from: "bozhidar.nunev@abv.bg",
        to: email,
        subject: "Reset Password",
        html: `
        <html>
        <head>
            <title>Password Reset Request</title>
        </head>
        <body>
            <h1>Password Reset Request</h1>
            <p>Hello ${user.fullName}</p>
            <p>We have received a request to reset your password for your account with Gold's Gym. To complete the password reset process, please click on the button below:</p>
            <a href=${process.env.LIVE_URL}/reset/${token}><button>Reset Passoword</button></a>
            <p>Please note that this link is only valid for 5 minutes</p>
            <p>If you did not request this, please ignore this email.</p>
            <p>Thank you</p>
            <p>Gold's Gym</p>
        </body>
        </html>
        `,
    };
    mailTransporter.sendMail(mailDetails, async (err, data)=>{
        if(err){
            return next(CreateError(500, "Something went wrong while sending the email!"))
        }else{
            await newToken.save();
            return next(CreateSuccess(200, "Email sent successfuly!"))
        }
    })
};

export const resetPassword = async (req, res, next) => {
    const token = req.body.token;
    const newPassword = req.body.password;

    jwt.verify(token, process.env.JWT_SECRET, async(err, data)=>{
        if(err){
            return next(CreateError(500,"Reset link is expired"));
        }else{
            const response = data;
            const user = await User.findOne({email: {$regex: '^' + response.email + '$', $options: 'i'}});
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(newPassword, salt);
            user.password = encryptedPassword;
            try {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: user._id},
                    {$set: user},
                    {new : true}
                )
                return next(CreateSuccess(200, "Password reseted!"))
            } catch (error) {
                return next(CreateError(500, "Something Went Wrong"))
            }
        }
    })
};

export const updateData = async (req, res, next) => {
    try {
        const user = req.user;
        const updateData = req.body;
        const userId = user.id;

        const foundUser = await User.findById(userId);
        if (!foundUser) {
            return next(CreateError(404, "User not found!"));
        }

        foundUser.fullName = updateData.fullName ? updateData.fullName : foundUser.fullName;
        foundUser.email = updateData.email ? updateData.email : foundUser.email;
        foundUser.phoneNumber = updateData.phoneNumber ? updateData.phoneNumber : foundUser.phoneNumber;

        if (updateData.password) {
            const hashedPassword = await bcrypt.hash(updateData.password, 10);
            foundUser.password = hashedPassword;
        }

        await foundUser.save();
        return res.status(200).json({
            status: 200,
            message: "Information updated successfully!",
        });
        } catch (err) {
        return next(err);
        }
};