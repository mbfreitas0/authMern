const router = require("express").Router();
const { Client } = require("../models/Client");
//const bcrypt = require("bcrypt");
const clientController = require("../controllers/Client");

router.get("/", clientController.getAllClients);

router.get("/:id", clientController.getByIDClient);

router.post("/", clientController.postClient);

router.put("/:id", clientController.putClient);

router.delete("/:id", clientController.deleteClient);

module.exports = router;
