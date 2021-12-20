import React from "react";

import { Route, Routes } from "react-router-dom";

import CurrencyPage from "../pages/currency/currency.page";

const LayoutContent = () => (
    <Routes>
        <Route path="/" element={<CurrencyPage />} />
        <Route path="/admin/currency" element={<CurrencyPage />} />
    </Routes>
)

export default LayoutContent;