import { StrictMode } from "react";
import './styles.css'
import App from './App'
import { createRoot } from "react-dom/client";



const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)