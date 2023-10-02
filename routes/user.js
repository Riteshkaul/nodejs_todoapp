import express from "express";
import { User } from "../models/user.js";
import { getAllUsers, getUserDetails, register } from "../controllers/user.js";
const router = express.Router();

router.get("/all", getAllUsers);

router.post("/all", register);

// /userid/ritesh ->ritesh is id
// /user/id/abc -> abc is id  this is dynamic url
// user/Userid
router.get("/userid/:id", getUserDetails);

export default router;
