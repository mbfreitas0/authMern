const Service = require("../models/Service");

exports.getAllServices = async (req, res, next) => {
  try {
    const service = await Service.find();
    res.status(200).json(service);

    if (!service) {
      res.status(422).json({ message: "O Serviço não foi encontrado" });

      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getByIdService = async (req, res, next) => {
  //Extrair o dado da requisição, pela url = req.params
  const id = req.params.id;

  try {
    const service = await Service.findOne({ _id: id });

    if (!service) {
      res.status(422).json({ message: "O Serviço não foi encontrado" });

      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.postService = async (req, res, next) => {
  //req.body
  const {
    firstName,
    lastName,
    tel,
    cep,
    tipoCep,
    subtipocep,
    uf,
    cidade,
    bairro,
    endereco,
    complemento,
    codigoIBGE,
    objeto,
    extraOptions,
  } = req.body;

  const service = {
    firstName,
    lastName,
    tel,
    cep,
    tipoCep,
    subtipocep,
    uf,
    cidade,
    bairro,
    endereco,
    complemento,
    codigoIBGE,
    objeto,
    extraOptions,
  };
  if (!firstName) {
    res.status(422).json({ error: "O campo nome é obrigatorio" });
  }

  try {
    //Criando dados
    await Service.create(service);
    res
      .status(201)
      .json({ message: "Serviço enserido com sucesso no sistema !" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.putService = async (req, res, next) => {
  const id = req.params.id;

  const { firstName } = req.body;

  const service = {
    firstName,
    lastName,
    tel,
    cep,
    tipoCep,
    subtipocep,
    uf,
    cidade,
    bairro,
    endereco,
    complemento,
    codigoIBGE,
    objeto,
    extraOptions,
  };

  try {
    const updatedService = await Service.updateOne({ _id: id }, service);
    res.status(200).json(service);

    if (updateService.matchedCount === 0) {
      res.status(422).json({ message: "O serviço não foi encontrado" });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.deleteService = async (req, res, next) => {
  const id = req.params.id;

  try {
    await Service.deleteOne({ _id: id });
    res.status(200).json({ message: "O serviço foi removido com sucesso" });

    if (!service) {
      res.status(422).json({ message: "O serviço não foi encontrado" });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
