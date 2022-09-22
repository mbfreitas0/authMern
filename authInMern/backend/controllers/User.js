const User = require("../models/User");

exports.getAllUsers = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json(user);

    if (!user) {
      res.status(422).json({ message: "Nenhuma usuário foi encontrado" });

      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getByIdUser = async (req, res, next) => {
  //Extrair o dado da requisição, pela url = req.params
  const id = req.params.id;

  try {
    const user = await User.findOne({ _id: id });

    if (!user) {
      res.status(422).json({ message: "O usuário não foi encontrado" });

      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.postUser = async (req, res, next) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0] });
    }

    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(409)
        .send({ message: "User with given email already exist !" });
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT));

    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();

    res.status(201).send({ message: "User created successfully" });
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.putUser = async (req, res, next) => {
  const id = req.params.id;

  const { firstName } = req.body;

  const category = {
    firstName,
  };

  try {
    const updatedUser = await User.updateOne({ _id: id }, user);
    res.status(200).json(user);

    if (updateUser.matchedCount === 0) {
      res.status(422).json({ message: "A categoria não foi encontrada" });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.deleteUser = async (req, res, next) => {
  const id = req.params.id;

  try {
    await User.deleteOne({ _id: id });
    res.status(200).json({ message: "O usuário foi removido com sucesso" });

    if (!user) {
      res.status(422).json({ message: "O usuário não foi encontrado" });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
