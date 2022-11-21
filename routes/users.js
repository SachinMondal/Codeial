const express = require('express');
const router = express.Router();

const usersConrtoller = require('../controllers/users_controller');

router.get('/profile', usersConrtoller.profile);
router.get('/sign-up',usersConrtoller.signUp);
router.get('/sign-in',usersConrtoller.signIn);


router.post('/create',usersConrtoller.create);
router.post('/create-session',usersConrtoller.createSession);
router.get('/sign-out',usersConrtoller.signOut);
module.exports = router;