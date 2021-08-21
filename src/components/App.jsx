import React, {useState} from "react";
import MyHeader from "./Header";
import MyNote from "./Note";
import MyFooter from "./Footer";
import notesArray from "../notes";
import InputArea from "./InputArea";

function App(){
    const [notes,setNotes]=useState([])

    function handleDelete(id){
        console.log(id);
        setNotes((prevNotes)=>{
            return prevNotes.filter((item, index) => {
                return index !== id;
            });

        })
    }
    function addItem(note){
        // let lastKey=notes[0].key;
        // notes.forEach(note=>{
        //     if (note.key>lastKey){
        //         lastKey=note.key;
        //     }
        // })
        // //console.log(lastKey);
        // note.key=lastKey+1;
        // console.log(note);


        setNotes((prevNotes)=>{
            return [...prevNotes,note];
        });
    }

    console.log(notes);

    return (
        <div>
            <MyHeader/>
            <InputArea onAdd={addItem}/>
            {/*{notes.map((noteItem,index)=>(*/}
            {/*    <MyNote key={noteItem.key} id={noteItem.key} title={noteItem.title} content={noteItem.content} onDelete={handleDelete}/>*/}
            {/*))}*/}
            {notes.map((noteItem,index)=>(
                <MyNote key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={handleDelete}/>
            ))}
            <MyFooter/>
        </div>
    );
}
export default App;
