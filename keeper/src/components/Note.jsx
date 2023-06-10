//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.


import React from "react";


function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
        
    );
}

export default Note;