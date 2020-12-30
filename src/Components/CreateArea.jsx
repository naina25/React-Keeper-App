import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [inputNote, setNote] = useState({
    title: "",
    content: "",
  });
  const [visibility, setVisibility] = useState(false);

  function handleTextClick() {
    setVisibility(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevValue) => {
      //   if (name === "title") {
      //     return {
      //       title: value,
      //       content: prevValue.content,
      //     };
      //   } else if (name === "content") {
      //     return {
      //       title: prevValue.title,
      //       content: value,
      //     };
      //   }
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleAddClick(e) {
    if (inputNote.title && inputNote.content) {
      e.preventDefault();
      props.createNote(inputNote);
      setNote({ title: "", content: "" });
      setVisibility(false);
    }
  }

  return (
    <div>
      <form className="create-note">
        <input
          style={{ display: !visibility && "none" }}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputNote.title}
        />
        <textarea
          onClick={handleTextClick}
          onChange={handleChange}
          name="content"
          value={inputNote.content}
          placeholder="Take a note..."
          rows="3"
        />
        <Zoom in={visibility}>
          <Fab onClick={handleAddClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
