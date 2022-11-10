import { ReactElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App(): ReactElement {
    return (
        <StrictMode>
            <div>Hello,World!</div>
        </StrictMode>
    );
}

const container = document.getElementById("container");
if (container) {
    createRoot(container).render(<App />);
}
