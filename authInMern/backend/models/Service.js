//import mongoose from "mongoose";
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// const joi = require("joi");
// const passwordComplexity = require("joi-password-complexity");
// const Joi = require("joi");
// const bcrypt = require("bcrypt");

const serviceSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    tel: { type: String, required: true },
    cep: { type: String, required: true },
    tipoCep: { type: String, required: true },
    subtipocep: { type: String, required: true },
    uf: { type: String, required: true },
    cidade: { type: String, required: true },
    bairro: { type: String, required: true },
    endereco: { type: String, required: true },
    complemento: { type: String, required: false },
    codigoIBGE: { type: String, required: false },
    objeto: { type: String, required: true },
    extraOptions: {
      type: [
        {
          category: { type: String, required: true },
          part: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

serviceSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "2d",
  });
  return token;
};

const Service = mongoose.model("service", serviceSchema);

// const validate = (data) => {
//   const schema = Joi.object({
//     firstName: Joi.string().required().label("First Name"),
//     lastName: Joi.string().required().label("Last Name"),
//     email: Joi.string().required().label("Email"),
//     password: passwordComplexity().required().label("Password"),
//   });
//   return schema.validate(data);
// };

module.exports = { Service };
// export default mongoose.models.Service ||
//   mongoose.model("Service", ServiceSchema);
