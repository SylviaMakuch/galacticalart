import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import EnterAnimation from "./components/Animation/EnterAnimation";
import MountainStar from "./components/MountainStar";
import SpacePageI from "./components/SpacePageI";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<EnterAnimation />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/space" element={<SpacePageI />} />
                    <Route path="/earth" element ={<MountainStar />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;