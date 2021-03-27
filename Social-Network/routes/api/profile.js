const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Profile = require("../../models/profile");
const User = require("../../models/user");
//@route GET api/profile/me
//@description Get current users profiles
//@Access Private

router.get("/me",auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate("user", ["name", "avatar"]);
    if (!profile) {
      return res
        .status(400)
        .json({ msg: "There is not profile for this user" });
    }
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
