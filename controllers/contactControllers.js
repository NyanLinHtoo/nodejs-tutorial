const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
// @desc Get All Contacts
// @route Get /api/contacts
// @access public
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  return res.status(200).json(contacts);
});

// @desc create Contacts
// @route Get /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
  console.log("The Req Body is: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  return res.status(200).json(contact);
});

// @desc Get Contact by id
// @route Get /api/contacts/:id
// @access public
const getContactById = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

// @desc update Contacts
// @route Get /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json({ message: `Update contact for ${req.params.id}` });
});

// @desc delete Contacts
// @route Get /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json({ message: `delete contact for ${req.params.id}` });
});

module.exports = {
  getContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
