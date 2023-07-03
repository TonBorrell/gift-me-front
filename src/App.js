import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SetNameAge from "./pages/SetNameAge";
import SetInterests from "./pages/SetInterests";
import ProductPage from "./pages/ProductPage";
import ThanksPage from "./pages/ThanksPage";
import LoginPage from "./pages/LoginPage";
import ProductPageFinal from "./pages/ProductPageFinal";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/setInterests" element={<SetInterests />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
        <Route path="/productPageFinal" element={<ProductPageFinal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
