import express from "express";
import NotesController from "./NotesController.js";

const routes = express.Router();

// Notes
routes
  .route("/notes")
  .get(NotesController.getAllNotes)
  .post(NotesController.postNotes);

routes
  .route("/notes/:id")
  .get(NotesController.getNoteById)
  .put(NotesController.updateNote)
  .delete(NotesController.deleteNote);

export default routes;
