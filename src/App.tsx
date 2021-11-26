import React from "react";
import { ReactDOM } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import SpacePageI from "./components/SpacePageI";
import EnterAnimation from "./components/Animation/EnterAnimation";
import EarthPage from "./components/EarthPage";
import MountainStar from "./components/MountainStar";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<EnterAnimation />} />
                    <Route path="/space" element={<MainPage />} />
                    <Route path="/earth" element ={<EarthPage />} />
                    <Route path="/mountain" element ={<MountainStar />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;