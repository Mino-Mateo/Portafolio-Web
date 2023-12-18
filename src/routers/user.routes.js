const { Router } = require("express");
const { redirectIfAuthenticated } = require("../helpers/validate-auth");
const {
	renderRegisterForm,
	registerNewUser,
	renderLoginForm,
	loginUser,
	logoutUser,
} = require("../controllers/user.controller");
const router = Router();

router.get("/user/register", renderRegisterForm);
router.post("/user/register", registerNewUser);

router.get("/user/login", renderLoginForm);
router.post("/user/login", loginUser);

router.post("/user/logout", logoutUser);

// Ruta para mostrar el fomrulario de login
router.get("/user/login", redirectIfAuthenticated, renderLoginForm);

module.exports = router;
