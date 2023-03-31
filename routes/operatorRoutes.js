const express = require('express')
const router = express.Router()
const user = require('../controllers/operatorController')

router.get("/allusers", user.userList);
router.get("/oneuser/:id", user.oneuser);
router.post("/adduser", user.addUser);
router.patch("/edituser/:id", user.userInfoEdit);
router.delete("/deleteuser/:id", user.userDelete);

module.exports = router