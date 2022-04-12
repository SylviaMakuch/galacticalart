import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Hero from "./components/Space/Hero";
import EnterAnimation from "./components/Animation/EnterAnimation";
import MountainStar from "./components/Earth/EarthPage";
import SpacePage from "./components/Space/SpacePage";
import EarthGallary from "./components/Earth/EarthGallary";
import ScrollToTop from "./components/Earth/ScrollToTop";

function App() {
    return (
        <div>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/galacticalart" element={<EnterAnimation />} />
                    <Route path="/main" element={<Hero />} />
                    <Route path="/space" element={<SpacePage />} />
                    <Route path="/earth" element={<MountainStar />} />
                    <Route path="/earthgallary" element={<EarthGallary />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;