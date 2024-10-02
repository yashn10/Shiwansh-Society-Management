const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    },

    role: {
        type: String,
        required: true
    },

    tokens: [
        {
            token: {
                type: String
            }
        }
    ]
})


userSchema.pre("save", async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }

    next();
})


userSchema.methods.generateAuthToken = async function () {
    try {
        const payload = {
            _id: this._id,
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role
        };
        let token = jwt.sign(payload, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        this.save();
        return token;
    } catch (error) {
        console.log("error", error);
    }
}


const User = mongoose.model("User", userSchema);
module.exports = User;