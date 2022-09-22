//import mongoose from "mongoose";

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const joi = require("joi");
// const passwordComplexity = require("joi-password-complexity");
// const Joi = require("joi");
// const bcrypt = require("bcrypt");

const partSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const Part = mongoose.model("part", partSchema);

partSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "2d",
  });
  return token;
};

// const validate = (data) => {
//   const schema = Joi.object({
//     firstName: Joi.string().required().label("First Name"),
//     lastName: Joi.string().required().label("Last Name"),
//     email: Joi.string().required().label("Email"),
//     password: passwordComplexity().required().label("Password"),
//   });
//   return schema.validate(data);
// };

module.exports = { Part };
// export default mongoose.models.Category ||
//   mongoose.model("Category", CategorySchema);
