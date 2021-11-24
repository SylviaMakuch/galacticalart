import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import SpacePageI from "./components/SpacePageI";
import EnterAnimation from "./components/Animation/EnterAnimation";
import EarthPage from "./components/EarthPage";


function App() {
    return (
        <BrowserRouter>
            <div>
                {/* <Route path="/"> 
                    <EnterAnimation />
                </Route> */}
                <MainPage />
                <SpacePageI />
                <EarthPage />
            </div>
        </BrowserRouter>
    )
}
export default App;