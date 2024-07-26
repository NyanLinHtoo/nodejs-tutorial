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
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not found");
  }
  return res.status(200).json(contact);
});

// @desc update Contacts
// @route Get /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  return res.status(200).json(updatedContact);
});

// @desc delete Contacts
// @route Get /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not found");
  }
  await Contact.remove();
  return res.status(200).json(contact);
});

module.exports = {
  getContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
