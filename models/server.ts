import express from "express";
import userRoutes from "../routes/usuario";
import cors from "cors";
import db from "../db/connection";
import { client } from "../clients/client.soap.calculator";
import { clientTransunion } from "../clients/client.soap.transunion";

class Server {
  private app: express.Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT ?? "8000";

    this.dbConnection(); // Inicializamos la conexión a la base de datos

    this.middlewares(); // Inicializamos los middlewares

    this.routes(); // Inicializamos los métodos, definimos rutas

    this.soap();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Database online");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  middlewares() {
    this.app.use(cors()); // CORS
    this.app.use(express.json()); // Lectura y parseo del body
    this.app.use(express.static("public")); // Directorio público, carpeta 'public'
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`Server running on port ${this.port} !!`)
    );
  }

  soap() {
    clientTransunion(); // Remove this line
  }
}

export default Server;
