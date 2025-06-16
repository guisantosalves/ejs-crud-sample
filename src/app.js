import express from "express";
import routes from "./controllers/routes.js";
import routesViews from "./controllers/routesViews.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import methodOverride from 'method-override';

dotenv.config();

const app = express();

// Por conta do ES Modules, você precisa disso para o __dirname funcionar:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar o EJS como view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Para servir arquivos estáticos (CSS, imagens, etc), se quiser:
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

// Middlewares para processar o corpo da requisição
app.use(express.json()); // Para processar corpos de requisição JSON
app.use(express.urlencoded({ extended: true })); // Para processar corpos de requisição URL-encoded
app.use(methodOverride('_method'));

// routing API
app.use(routes);

// routing Views
app.use(routesViews);

app.listen(process.env.PORT, (err) => {
  if (!err) {
    console.log(
      "Server is Successfully running, and app is listening on port " +
        process.env.PORT
    );
  } else {
    console.log("Error listening port " + process.env.PORT);
  }
});
