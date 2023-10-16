import { useState } from "react";

const EditNote = ({id, text, handleEditNote, handleIsEdit}) => {

  const [noteText, setNoteText] = useState(text);
  const [isValid, setIsValid] = useState(true);
  const characterLimit = 300;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
    if(event.target.value.length <= 20 || event.target.value.length >= 300){
        setIsValid(false);
    }else{
        setIsValid(true);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length >= 0 && noteText.length >= 20 && noteText.trim().length <= 300) {
      handleEditNote(id, noteText);
      //setNoteText("");
      setIsValid(true);
      handleIsEdit(false);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="note edit">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      {isValid === false && (
        <div className="error">
          <small>Please enter text length between 20 to 300</small>
        </div>
      )}
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditNote;
