import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SetNameAge from "./pages/SetNameAge";
import SetInterests from "./pages/SetInterests";
import ProductPage from "./pages/ProductPage";
import ThanksPage from "./pages/ThanksPage";

require("dotenv").config();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SetNameAge />} />
        <Route path="/setInterests" element={<SetInterests />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
