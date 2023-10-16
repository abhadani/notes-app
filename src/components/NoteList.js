import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          handleEditNote = {handleEditNote}
        ></Note>
      ))}
      <AddNote handleAddNote={handleAddNote}></AddNote>
    </div>
  );
};

export default NotesList;
