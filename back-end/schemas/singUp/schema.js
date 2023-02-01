const mongoose = require("mongoose")
const createUser = {
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    name: {
        type: String,
        required: true,
        trim: true,
        required: 'name is required',
        match: [/^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/, 'Please fill a valid name']
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        required: 'number phone is required',
        match: [/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, 'Please fill a valid number phone']

    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: false,
        required: 'password is required',
        match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/, 'Please fill a valid number phone']
    },
    profilePicture: {
        type: String,
        default: "",
    },
    coverPicture: {
        type: String,
        default: "",
    },
    followers: {
        type: Array,
        default: [],
    },
    followings: {
        type: Array,
        default: [],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    desc: {
        type: String,
        max: 50,
    },
    city: {
        type: String,
        max: 50,
    },
    from: {
        type: String,
        max: 50,
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3],
    },
}

const schemaUser = new mongoose.Schema(createUser, { timestamps: true });

module.exports = mongoose.model("collec_users", schemaUser);