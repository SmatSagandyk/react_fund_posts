import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./components/UI/AppRouter.jsx";
import Navbar from "./components/UI/navbar/Navbar.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
