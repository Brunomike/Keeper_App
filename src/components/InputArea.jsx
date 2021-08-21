import React, {useState} from "react"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom';

function InputArea(props) {
    const [note,setNote]=useState({key:"", title:"", content:""})
    const [isZoom,setZoom]=useState(false);
    function handleChange(e){
        const {name,value}=e.target;
        setNote((prevNotes)=>{
            return(
                {
                    ...prevNotes,
                    [name]:value
                }
            );
        })

    }
    //console.log(note);
    function handleClick(){
        setZoom(true);
    }

    return (
        <div>
            <form className="create-note">
                <input name="title" style={{display:isZoom?"":"none"}} placeholder="Title" value={note.title} onChange={handleChange}/>
                <textarea name="content"  onClick={handleClick} placeholder="Take a note..." rows={isZoom?3:1} value={note.content} onChange={handleChange}/>
                <Zoom in={isZoom?true:false}>
                <Fab onClick={(e)=>{
                    e.preventDefault();
                    props.onAdd(note);
                    setNote({key:"", title:"", content:""})
                }}><AddIcon/></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default InputArea;
