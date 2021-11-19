import React from "react";
import MainPage from "./components/MainPage";
import SpacePageI from "./components/SpacePageI";
import SpaceAnimation from "./components/Animation/SpaceAnimation";
import AnimationLayers from "./components/Animation/AnimationLayers";


function App() {
    return (
        <div>
        <MainPage />
        <SpaceAnimation />
        <AnimationLayers />
        <SpacePageI />
        </div>

    )
}
export default App;