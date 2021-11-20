import React from "react";
import MainPage from "./components/MainPage";
import SpacePageI from "./components/SpacePageI";
import EnterAnimation from "./components/Animation/EnterAnimation";

function App() {
    return (
        <div>
            <EnterAnimation />
            <MainPage />
            <SpacePageI />
        </div>
    )
}
export default App;