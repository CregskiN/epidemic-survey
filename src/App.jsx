import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import {GlobalStyle} from './static/style.js';
import Header from "./common/Header/index.jsx";
import Registrate from "./pages/registrate/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header pageId={2} />
      <Route path="/" exact component={Registrate} />
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
