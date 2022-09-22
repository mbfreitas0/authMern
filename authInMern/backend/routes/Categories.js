const router = require("express").Router();
const { Category } = require("../models/Category");
//const bcrypt = require("bcrypt");
const categoryController = require("../controllers/Category");

router.get("/", categoryController.getAllCategories);

router.get("/:id", categoryController.getByIDCategory);

router.post("/", categoryController.postCategory);

router.put("/:id", categoryController.putCategory);

router.delete("/:id", categoryController.deleteCategory);

// //Rotas da API
// router.post("/", async (req, res) => {
//   //req.body
//   const { name } = req.body;

//   const category = {
//     name,
//   };
//   if (!name) {
//     res.status(422).json({ error: "O campo nome da categoria é obrigatorio" });
//   }

//   try {
//     //Criando dados
//     await Category.create(category);
//     res
//       .status(201)
//       .json({ message: "Categoria enserida com sucesso no sistema !" });
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

// //Read - Leitura de todos os dados
// router.get("/", async (req, res) => {
//   //Extrair o dado da requisição, pela url = req.params
//   //const id = req.params.id;

//   try {
//     const category = await Category.find();
//     res.status(200).json(category);

//     if (!category) {
//       res.status(422).json({ message: "Nenhuma categoria foi encontrada" });

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
//     const category = await Category.findOne({ _id: id });

//     if (!category) {
//       res.status(422).json({ message: "A categoria não foi encontrada" });

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

//   const category = {
//     name,
//   };

//   try {
//     const updatedCategory = await Category.updateOne({ _id: id }, category);
//     res.status(200).json(category);

//     if (updateCategory.matchedCount === 0) {
//       res.status(422).json({ message: "A categoria não foi encontrada" });
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
//     await Category.deleteOne({ _id: id });
//     res.status(200).json({ message: "A categoria foi removida com sucesso" });

//     if (!category) {
//       res.status(422).json({ message: "A categoria não foi encontrada" });
//       return;
//     }
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

module.exports = router;
