import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import MainTag from "./Components/Main";
import CoinInfo from "./Components/CoinInfo";

const App: React.FC = () => {
  return (
    <div className="App">
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainTag />} />
          <Route path="/:id" element={<CoinInfo />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
