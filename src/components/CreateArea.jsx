import React from "react";
import { useState } from "react";

function CreateArea(props) {
    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");

    function handleChange(event){
        const {name, value} = event.target;
        if (name === "title"){
            setInputTitle(value);
        } else if (name === "content"){
            setInputContent(value);
        }
    }

    function handleClick(event){
        event.preventDefault();
        props.onAdd(inputTitle, inputContent);
        setInputTitle("");
        setInputContent("");
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={inputTitle} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={inputContent}  onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
