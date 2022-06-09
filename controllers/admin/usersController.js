const express = require('express');
const userModel = require('../../models/users');

/// Retriving users data
const users = async (req, res) => {
    try {
        res.json('this is users')
    } catch (error) {
        console.log(error.message)
    }
};

module.exports = { users }