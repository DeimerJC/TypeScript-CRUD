import dotenv from "dotenv";
import Server from "./models/server";

dotenv.config(); // Carga las variables de entorno

const server = new Server();

server.listen();
