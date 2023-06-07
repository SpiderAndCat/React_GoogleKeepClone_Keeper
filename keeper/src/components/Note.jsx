//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.

//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.


import React from "react";

function Note() {
    return (
        <div className="note">
            <h1>Title</h1>
            <p>This is my body</p>
        </div>
    );
}

export default Note;