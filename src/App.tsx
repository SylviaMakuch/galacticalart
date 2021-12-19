import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./components/Space/MainPage";
import EnterAnimation from "./components/Animation/EnterAnimation";
import MountainStar from "./components/Earth/MountainStar";
import SpacePageI from "./components/Space/SpacePageI";
import EarthGallary from "./components/Earth/EarthGallary";
import ScrollToTop from "./components/Earth/ScrollToTop";

function App() {
    return (
        <div>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/galacticalart" element={<EnterAnimation />} />
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