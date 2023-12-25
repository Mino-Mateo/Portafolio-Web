// importar mongoose
const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://localhost:27017/portfolio";

// cadena de conexion a la BDD

//crear un metodo para hacer la cadena de concexion
connection = async () => {
	try {
		//Invocar al metodo connect
		await mongoose.connect(MONGODB_URI);
		//respuesta de la promesa == "OK"
		console.log("Database is connected");
	} catch (error) {
		// Resuesta de la promesa =="ERROR"
		console.log(error);
	}
};

// exportar el metodo connect
module.exports = connection;
