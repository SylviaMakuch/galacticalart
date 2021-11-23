import React from "react";
import MainPage from "./components/MainPage";
import SpacePageI from "./components/SpacePageI";
import EnterAnimation from "./components/Animation/EnterAnimation";
import EarthPage from "./components/EarthPage";

function App() {
    return (
        <div>
            <EnterAnimation />
            <MainPage />
            <SpacePageI />
            <EarthPage />
        </div>
    )
}
export default App;