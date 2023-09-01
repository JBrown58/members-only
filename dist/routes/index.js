"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
const passport = require("passport");
const auth_controller = require("../controllers/auth_controller");
const index_controller = require("../controllers/index_controller");
const message_controller = require("../controllers/message_controller");
const user_controller = require("../controllers/user_controller");
/* GET home page. */
router.get("/", function (req, res, next) {
    res.redirect("/home");
});
router.get("/home", function (req, res, next) {
    res.render("index", { title: "Express" });
});
//Auth routes
router.post("/signup-form", auth_controller.sign_up_form_post);
router.post("/login-form", auth_controller.login_form_post);
router.get("/logout", auth_controller.logout_get);
//Index routes
router.get("/signup-form", index_controller.sign_up_form_get);
router.get("/login-form", index_controller.login_form_get);
module.exports = router;
