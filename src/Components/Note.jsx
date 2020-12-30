import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

export const Note = (props) => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        className="deletebtn"
        onClick={() => {
          props.handleDelete(props.id);
        }}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
