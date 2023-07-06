//registro
//login

const {Router} = require('express');
const {register, getUsers, login} = require('../controllers/auth.controllers')

const router = Router();

router.get("/",getUsers);
router.post("/register",register);
router.post("/login",login);

module.exports = router