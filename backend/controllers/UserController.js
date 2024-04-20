const { request } = require('express');
const express = require('express');

// Import user model
User = require('../models/UserModel');

exports.signIn = async function (req, res) {
    try {
        // Use findOne() method to find a user by email
        let user = await User.findOne({ email: req.body.email })
        if (user === null) {
            user = new User();
            user.name = req.body.name;
            user.email = req.body.email;
            user.picture = req.body.picture;

            await user.save();
            res.status(200).send(user);
        } else {
            res.status(200).send(user);;
        }
    } catch (error) {
        console.error('Error finding user:', error);
        res.status(500).send("Login failed");;
    }
}