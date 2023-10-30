const { data } = require("autoprefixer");
const FormData = require("../models/messageModel");
const asyncHandler = require("express-async-handler");

const homePage = (req, res) => {
  res.send("getting messages");
};

const sendFormData = asyncHandler(async (req, res) => {
  const { name, email, phone, message } = req.body;

  const formData = await FormData.create({
    name,
    email,
    phone,
    message,
  });

  res.status(200).json(formData);

  console.log(formData);
});



module.exports = {
  homePage,
  sendFormData,
};
