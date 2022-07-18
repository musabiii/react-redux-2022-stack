import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import FavouritsPage from "./pages/FavouritsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritsPage />} />
      </Routes>
    </div>
  );
}

export default App;
