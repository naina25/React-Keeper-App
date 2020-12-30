import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);

  function createNote(newNote) {
    setNotes((prevItems) => {
      return [...prevItems, newNote];
    });
  }

  function handleDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, noteIndex) => noteIndex !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea createNote={createNote} />
      {notes.map((note, noteIndex) => {
        return (
          <Note
            key={noteIndex}
            id={noteIndex}
            title={note.title}
            content={note.content}
            handleDelete={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
