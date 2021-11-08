import React from "react";
import ReactDOM from "react-dom";

const container = document.getElementById("container");

function App(): React.ReactElement {
    return (
        <>
            <div>Hello,World!</div>
        </>
    );
}

ReactDOM.render(<App />, container);
