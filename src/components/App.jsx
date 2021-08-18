import React  from "react";
import MyHeader from "./Header";
import MyNote from "./Note";
import MyFooter from "./Footer";
import notes from "../notes";

function App(){
    return (
        <>
            <MyHeader/>
            {notes.map((noteItem)=>(
                <MyNote key={noteItem.key} title={noteItem.title} content={noteItem.content}/>
            ))}

            <MyFooter/>
        </>
    );
}
export default App;
