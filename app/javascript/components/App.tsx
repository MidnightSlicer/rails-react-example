import React from "react";
import Button from "./Button";
import Chat from "./Chat";

const App = () => {
    const buttonText = "Button"
    return (
        <div>
            <p>Here is a paragraph written in the HelloWorld.tsx file</p>
            <br/>
            <Button onClick={() => console.log("Hello")}>{buttonText}</Button>
            <br/><br/>
            <Chat>Hello!</Chat>
        </div>
    );
}

export default App

