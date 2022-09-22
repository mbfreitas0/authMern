const router = require("express").Router();
const { User, validate } = require("../models/User");
const bcrypt = require("bcrypt");
const userController = require("../controllers/User");

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getByIdUser);

router.post("/", userController.postUser);

router.put("/:id", userController.putUser);

router.delete("/", userController.deleteUser);

// router.post("/", async (req, res) => {
//   try {
//     const { error } = validate(req.body);
//     if (error) {
//       return res.status(400).send({ message: error.details[0] });
//     }

//     const user = await User.findOne({ email: req.body.email });

//     if (user) {
//       return res
//         .status(409)
//         .send({ message: "User with given email already exist !" });
//     }
//     const salt = await bcrypt.genSalt(Number(process.env.SALT));

//     const hashPassword = await bcrypt.hash(req.body.password, salt);

//     await new User({ ...req.body, password: hashPassword }).save();

//     res.status(201).send({ message: "User created successfully" });
//   } catch (err) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

module.exports = router;
