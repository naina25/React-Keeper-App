import React from "react";

export const Note = (props) => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.handleDelete(props.id);
        }}>
        DELETE
      </button>
    </div>
  );
};

export default Note;
