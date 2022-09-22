require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

module.exports = () => {
  //Variáveis para a string de conexão com o Mongoose:
  const dbUser = process.env.DB_USER;
  const dbPass = encodeURIComponent(process.env.DB_PASSWORD);

  mongoose

    //mongodb+srv://mbfreitas0:<password>@auth-mern.rqzozop.mongodb.net/?retryWrites=true&w=majority
    .connect(
      `mongodb+srv://${dbUser}:${dbPass}@auth-mern.rqzozop.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      //app.listen(3001)
      console.log(`Conexão ao banco efetuado com sucesso !`);
    })
    .catch((err) => console.log(err));
};

// module.exports = () => {

//   const connectionParams = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };
//   try {
//     mongoose.connect(process.env.DB, connectionParams);
//     console.log("Connected to database successfully");
//   } catch (error) {
//     console.log(error);
//     console.log("Could not connect database!");
//   }
// };
