const router = require("express").Router();
const { Service } = require("../models/Service");
//const bcrypt = require("bcrypt");
const serviceController = require("../controllers/Service");

router.get("/", serviceController.getAllServices);

router.get("/:id", serviceController.getByIdService);

router.post("/", serviceController.postService);

router.put("/:id", serviceController.putService);

router.delete("/:id", serviceController.deleteService);

//Rotas da API
// router.post("/", async (req, res) => {
//   //req.body
//   const {
//     firstName,
//     lastName,
//     tel,
//     cep,
//     tipoCep,
//     subtipocep,
//     uf,
//     cidade,
//     bairro,
//     endereco,
//     complemento,
//     codigoIBGE,
//     objeto,
//     extraOptions,
//   } = req.body;

//   const service = {
//     firstName,
//     lastName,
//     tel,
//     cep,
//     tipoCep,
//     subtipocep,
//     uf,
//     cidade,
//     bairro,
//     endereco,
//     complemento,
//     codigoIBGE,
//     objeto,
//     extraOptions,
//   };
//   if (!firstName) {
//     res.status(422).json({ error: "O campo nome é obrigatorio" });
//   }

//   try {
//     //Criando dados
//     await Service.create(service);
//     res
//       .status(201)
//       .json({ message: "Serviço enserido com sucesso no sistema !" });
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

// //Read - Leitura de todos os dados
// router.get("/", async (req, res) => {
//   try {
//     const service = await Service.find();
//     res.status(200).json(service);

//     if (!service) {
//       res.status(422).json({ message: "O Serviço não foi encontrado" });

//       return;
//     }
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

// //Read - Leitura de dados
// router.get("/:id", async (req, res) => {
//   //Extrair o dado da requisição, pela url = req.params
//   const id = req.params.id;

//   try {
//     const service = await Service.findOne({ _id: id });

//     if (!service) {
//       res.status(422).json({ message: "O Serviço não foi encontrado" });

//       return;
//     }
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

// //Update - atualização de dados (PUT / PATCH)
// router.patch("/:id", async (req, res) => {
//   const id = req.params.id;

//   const { firstName } = req.body;

//   const service = {
//     firstName,
//     lastName,
//     tel,
//     cep,
//     tipoCep,
//     subtipocep,
//     uf,
//     cidade,
//     bairro,
//     endereco,
//     complemento,
//     codigoIBGE,
//     objeto,
//     extraOptions,
//   };

//   try {
//     const updatedService = await Service.updateOne({ _id: id }, service);
//     res.status(200).json(service);

//     if (updateService.matchedCount === 0) {
//       res.status(422).json({ message: "O serviço não foi encontrado" });
//       return;
//     }
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

// //Delete - deletar dados
// router.delete("/:id", async (req, res) => {
//   const id = req.params.id;

//   try {
//     await Service.deleteOne({ _id: id });
//     res.status(200).json({ message: "O serviço foi removido com sucesso" });

//     if (!service) {
//       res.status(422).json({ message: "O serviço não foi encontrado" });
//       return;
//     }
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

module.exports = router;
