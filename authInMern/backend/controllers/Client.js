const { Client } = require("../models/Client");
//const bcrypt = require("bcrypt");

exports.getAllClients = async (req, res, next) => {
  try {
    const client = await Client.find();
    res.status(200).json(client);

    if (!client) {
      res.status(422).json({ message: "Nenhum cliente foi encontrado" });

      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Get a client by id
exports.getByIDClient = async (request, response) => {
  try {
    const client = await Client.findById(request.params.id);
    response.status(200).json(client);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

//Buscar por ID
// exports.getByIDClient = async (req, res, next) => {
//   //Extrair o dado da requisição, pela url = req.params
//   //const id = req.params.id;
//   try {
//     // const client = await Client.findById({ _id: req.params.id }).then(
//     const client = await Client.findById(req.params.id).then((result) => {
//       res.status(200).json({ client: result });
//       // response.status(200).json(client);
//     });
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };
// exports.postClient = async (req, res, next) => {
//   try {
//     const postResponse = await Client.post(
//       req.body.firstName,
//       req.body.lastName,
//       req.body.tel,
//       req.body.address,
//       req.body.number
//     );
//     res.status(201).json(postResponse);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

// Save data of the client in database
exports.postClient = async (request, response) => {
  const client = request.body;

  const newClient = new Client(client);
  try {
    await newClient.save();
    response.status(201).json(newClient);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// exports.postClient = async (req, res, next) => {
//   const { firstName, lastName, tel, address, number } = req.body;

//   const client = {
//     firstName,
//     lastName,
//     tel,
//     address,
//     number,
//   };
//   if (!client) {
//     res.status(422).json({ error: "O campo nome do cliente é obrigatorio" });
//   }

//   try {
//     //Criando dados
//     await Client.create(client);
//     res
//       .status(201)
//       .json({ message: "Cliente enserido com sucesso no sistema !" });
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// };

// Save data of edited client in the database
exports.putClient = async (request, response) => {
  let client = request.body;

  const editClient = new Client(client);
  try {
    await Client.updateOne({ _id: request.params.id }, editClient);
    response.status(201).json(editClient);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// exports.putClient = async (req, res, next) => {
//   const id = req.params.id;

//   const { firstName, lastName, tel, address, number } = req.body;

//   const client = {
//     firstName,
//     lastName,
//     tel,
//     address,
//     number,
//   };

//   try {
//     const updatedClient = await Client.updateOne({ _id: id }, client);
//     res.status(200).json(client);

//     if (updateClient.matchedCount === 0) {
//       res.status(422).json({ message: "O cliente não foi encontrado" });
//       return;
//     }
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// };

exports.deleteClient = async (req, res, next) => {
  const id = req.params.id;

  try {
    await Client.deleteOne({ _id: id });
    res.status(200).json({ message: "A categoria foi removida com sucesso" });

    if (!client) {
      res.status(422).json({ message: "A categoria não foi encontrada" });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
