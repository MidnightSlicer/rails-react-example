import React from "react";
import Button from "./Button";

const HelloWorld = () => {
    const buttonText = "Button"
    return (
        <div>
            <p>Here is a paragraph written in the HelloWorld.tsx file</p>
            <br/>
            <Button onClick={() => console.log("Hello")}>{buttonText}</Button>
        </div>
    );
}

export default HelloWorld

