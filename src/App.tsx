import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import EnterAnimation from "./components/Animation/EnterAnimation";
import MountainStar from "./components/MountainStar";
import SpacePageI from "./components/SpacePageI";
import EarthGallary from "./components/EarthGallary";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <div>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<EnterAnimation />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/space" element={<SpacePageI />} />
                    <Route path="/earth" element={<MountainStar />} />
                    <Route path="/earthgallary" element={<EarthGallary />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;