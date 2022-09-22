const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const clientSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    tel: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: String, required: true },
  },
  { timestamps: true }
);

const Client = mongoose.model("client", clientSchema);

clientSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "2d",
  });
  return token;
};

module.exports = { Client };
