import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import Search from './components/Search';
import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "28/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "30/04/2021",
    },
  ]);

  const [searchText, setSearchText] = useState('');

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const editNote =(id, text) => {
    //find index
    const index = notes.findIndex((note) => note.id === id);
    //update value at index
    notes[index].text = text;
    const date = new Date();
    notes[index].date = date.toLocaleDateString();
    //create new array and set it to notes array, so after updating it refresh app component
    const newNotes = [...notes];
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <h1>Notes</h1>
      <Search handleSearchNote={setSearchText} />

      <NoteList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleEditNote = {editNote}
      ></NoteList>
    </div>
  );
}

export default App;
