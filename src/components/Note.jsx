import React from "react";


let notesArray=[{title:"This is the note title",content:"This is the note content"}]

function Note(props){
    return(
        <>
                    <div className={"note"}>
                        <h1>{props.title}</h1>
                        <p>{props.content}</p>
                    </div>


        </>
    );
}
//console.log(notesArray);
export default Note;
export {notesArray};