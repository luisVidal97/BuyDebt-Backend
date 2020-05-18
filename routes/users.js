var express = require("express");
var router = express.Router();
const userController = require("../controllers/user");

/* GET users listing. */
router.get("/getUsers", userController.index);

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("/naturalPerson", userController.registerNaturalPerson);
router.post("/judicialPerson", userController.registerJudicialPerson);
router.delete("/:id", userController.deleteUser);

router.post("/signin", userController.signin);

module.exports = router;