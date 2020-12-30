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

  return (
    <div>
      <Header />
      <CreateArea createNote={createNote} />
      {notes.map((note, noteIndex) => {
        return (
          <Note key={noteIndex} title={note.title} content={note.content} />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
