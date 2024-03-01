import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App(){
    const [notes, setNotes] = useState([]);

    function addNote(title, content){
        const newNote = {
            title: title,
            content: content
        }
        setNotes(prevItems => {
            return [...prevItems, newNote];
        });
    }

    function deleteNote(id){
        console.log("id: " + id);
        setNotes(prevItems => {
            return prevItems.filter((note, i) => {
                return i !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notes.map((note, id) => {
                return (<Note key={id} id={id} title={note.title} content={note.content} onDelete={deleteNote} />);
                })}
            <Footer />
        </div>
    );
}

export default App;