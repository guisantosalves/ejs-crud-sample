import axios from "axios";
import express from "express";

const routesViews = express.Router();

// Notes
routesViews.route("/views/notes").get(async (req, res) => {
  try {
    const response = await axios.get(
      `http://localhost:${process.env.PORT}/notes`
    );

    res.render("index", { data: response.data });
  } catch (err) {
    console.error(error);
    res.status(500).send("Erro ao buscar as notas");
  }
});

export default routesViews;
