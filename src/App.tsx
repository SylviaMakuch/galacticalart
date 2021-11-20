import React from "react";
import MainPage from "./components/MainPage";
import SpacePageI from "./components/SpacePageI";
import SpaceAnimation from "./components/Animation/SpaceAnimation";

function App() {
    return (
        <div>
        <SpaceAnimation /> 
        <MainPage />
        <SpacePageI />
        </div>

    )
}
export default App;