export default class NotesService {
  static notes = [];
  static nextId = 1;

  // Create
  static createNote(req, res) {
    const data = req.body;

    if (!data) {
      return res.status(400).json({ error: "Content is required" });
    }

    const newNote = {
      id: this.nextId++,
      note: data.note,
      date: data.date,
      createdAt: new Date(),
    };

    this.notes.push(newNote);
    return res.redirect("/views/notes");
  }

  // Read all
  static getAllNotes(req, res) {
    return res.json(this.notes);
  }

  // Read by ID
  static getNoteById(req, res) {
    const id = parseInt(req.params.id);
    const note = this.notes.find((note) => note.id === id);

    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    return res.json(note);
  }

  // Update
  static updateNote(req, res) {
    const id = parseInt(req.params.id);
    const data = req.body;

    const noteFound = this.notes.find((note) => note.id === id);

    if (!noteFound) {
      return res.status(404).json({ error: "Note not found" });
    }

    if (!data) {
      return res.status(400).json({ error: "Content is required" });
    }

    noteFound.note = data.note;
    noteFound.date = data.date;
    noteFound.updatedAt = new Date();

    return res.redirect("/views/notes");
  }

  // Delete
  static deleteNote(req, res) {
    const id = parseInt(req.params.id);
    const index = this.notes.findIndex((note) => note.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Note not found" });
    }

    const deletedNote = this.notes.splice(index, 1)[0];
    return res.redirect("/views/notes");
  }
}
