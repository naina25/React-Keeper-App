import React, { useState } from "react";

function CreateArea(props) {
  const [inputNote, setNote] = useState({
    title: "",
    content: "",
  });
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
    e.preventDefault();
    props.createNote(inputNote);
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={inputNote.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleAddClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
