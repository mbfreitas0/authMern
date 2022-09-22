// const Part = require("../models/Part");
const { Part } = require("../models/Part");

exports.getAllParts = async (req, res, next) => {
  try {
    const part = await Part.find();
    res.status(200).json(part);

    if (!part) {
      res.status(422).json({ message: "Nenhuma peça foi encontrada" });

      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getByIdPart = async (req, res, next) => {
  //Extrair o dado da requisição, pela url = req.params
  const id = req.params.id;

  try {
    const part = await Part.findOne({ _id: id });

    if (!part) {
      res.status(422).json({ message: "A peça não foi encontrada" });

      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.postPart = async (req, res, next) => {
  //req.body
  const { name } = req.body;

  const part = {
    name,
  };
  if (!name) {
    res.status(422).json({ error: "O campo nome de peça é obrigatorio" });
  }

  try {
    //Criando dados
    await Part.create(part);
    res.status(201).json({ message: "Peça enserida com sucesso no sistema !" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.putPart = async (req, res, next) => {
  const id = req.params.id;

  const { name } = req.body;

  const part = {
    name,
  };

  try {
    const updatedPart = await Part.updateOne({ _id: id }, part);
    res.status(200).json(part);

    if (updatePart.matchedCount === 0) {
      res.status(422).json({ message: "A peça não foi encontrada" });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.deletePart = async (req, res, next) => {
  const id = req.params.id;

  try {
    await Part.deleteOne({ _id: id });
    res.status(200).json({ message: "A peça foi removida com sucesso" });

    if (!peça) {
      res.status(422).json({ message: "A peça não foi encontrada" });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
