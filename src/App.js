import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Navigation from "./Navigation";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <Routes />
            </div>
        </BrowserRouter>
    );
}
    
export default App;
    