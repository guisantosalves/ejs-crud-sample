import NotesService from "../service/NotesService.js";

export default class NotesController {
  // Create
  static postNotes(req, res) {
    NotesService.createNote(req, res);
  }

  // Read all
  static getAllNotes(req, res) {
    NotesService.getAllNotes(req, res);
  }

  // Read by ID
  static getNoteById(req, res) {
    NotesService.getNoteById(req, res);
  }

  // Update
  static updateNote(req, res) {
    NotesService.updateNote(req, res);
  }

  // Delete
  static deleteNote(req, res) {
    NotesService.deleteNote(req, res);
  }
}
