const route = require('express').Router();
const authMid = require('express-jwt')({
    userProperty: 'payload',
    secret: process.env.JWT_SECRET
})
const studentCtrl = require('../controllers/studentCtrl');

route.get('/getInfo', authMid, studentCtrl.getInfo);

module.exports = route;