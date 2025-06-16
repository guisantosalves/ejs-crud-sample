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
  } catch (error) {
    res.status(500).send("Erro ao buscar as notas");
  }
});

routesViews.route("/views/notes/form").get(async (req, res) => {
  try {
    const idForEdit = req.query.editar;
    if (idForEdit) {
      // when editing
      const response = await axios.get(
        `http://localhost:${process.env.PORT}/notes/${idForEdit}`
      );
      res.render("form", { data: response.data });
    } else {
      res.render("form", { data: undefined });
    }
  } catch (error) {
    res.status(500).send("Erro ao buscar as notas");
  }
});

export default routesViews;
