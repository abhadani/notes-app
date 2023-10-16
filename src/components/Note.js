import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import EditNote from "./EditNote";

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {

    const [isEdit, setIsEdit] = useState(false);

    const handleEdit =(event) => {
        console.log("edit");
        setIsEdit(true);
        //handleEditNote(id, text);

    }

  return (
    <div className="note">
        {isEdit ? <EditNote id={id} text={text} handleEditNote={handleEditNote} handleIsEdit={setIsEdit}/> : 
            <>
                <span>{text}</span>
                <div className="note-footer">
                    <small>{date}</small>
                    <div>
                        <MdEditSquare onClick={handleEdit} className="edit-icon" size="1.3em"/>
                        <MdDeleteForever
                        onClick={() => handleDeleteNote(id)}
                        className="delete-icon"
                        size="1.5em"
                        />
                    </div>
                    
                </div>
            </>
        }
    </div>
  );
};

export default Note;
