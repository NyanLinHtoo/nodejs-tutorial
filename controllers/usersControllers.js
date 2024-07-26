const asyncHandler = require("express-async-handler");
// @desc Register a user
// @route Post /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register user" });
});

// @desc login a user
// @route Post /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

// @desc Current User info
// @route Post /api/users/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user" });
});

module.exports = { registerUser, loginUser, currentUser };