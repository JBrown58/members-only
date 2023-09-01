import { Request, Response, NextFunction } from "express";
var express = require("express");
var router = express.Router();
const passport = require("passport");
const message_controller = require("../controllers/message_controller");

/* GET home page. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  console.log(req.user);
  res.render("index", { title: "Express" });
});

router.get("/signup-form", message_controller.sign_up_form_get);

router.post("/signup-form", message_controller.sign_up_form_post);

// router.get("/new-member", message_controller.new_member_get);

router.get("/login-form", message_controller.login_form_get);

router.post("/login-form", message_controller.login_form_post);

module.exports = router;
