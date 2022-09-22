const router = require("express").Router();
const { Part } = require("../models/Part");
//const bcrypt = require("bcrypt");
const partController = require("../controllers/Part");

router.get("/", partController.getAllParts);

router.get("/:id", partController.getByIdPart);

router.post("/", partController.postPart);

router.put("/:id", partController.putPart);

router.delete("/:id", partController.deletePart);

//Rotas da API
// router.post("/", async (req, res) => {
//   //req.body
//   const { name } = req.body;

//   const part = {
//     name,
//   };
//   if (!name) {
//     res.status(422).json({ error: "O campo nome de peça é obrigatorio" });
//   }

//   try {
//     //Criando dados
//     await Part.create(part);
//     res.status(201).json({ message: "Peça enserida com sucesso no sistema !" });
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

// //Read - Leitura de todos os dados
// router.get("/", async (req, res) => {
//   try {
//     const part = await Part.find();
//     res.status(200).json(part);

//     if (!part) {
//       res.status(422).json({ message: "Nenhuma peça foi encontrada" });

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
//     const part = await Part.findOne({ _id: id });

//     if (!part) {
//       res.status(422).json({ message: "A peça não foi encontrada" });

//       return;
//     }
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

// //Update - atualização de dados (PUT / PATCH)
// router.patch("/:id", async (req, res) => {
//   const id = req.params.id;

//   const { name } = req.body;

//   const part = {
//     name,
//   };

//   try {
//     const updatedPart = await Part.updateOne({ _id: id }, part);
//     res.status(200).json(part);

//     if (updatePart.matchedCount === 0) {
//       res.status(422).json({ message: "A peça não foi encontrada" });
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
//     await Part.deleteOne({ _id: id });
//     res.status(200).json({ message: "A peça foi removida com sucesso" });

//     if (!peça) {
//       res.status(422).json({ message: "A peça não foi encontrada" });
//       return;
//     }
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

module.exports = router;
