import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import Header from "./common/Header/index.jsx";
import Popular from './pages/popular/index.jsx';
import Registrate from "./pages/registrate/index.jsx";
import Management from './pages/management/index.jsx';

import { GlobalStyle } from './static/style.js';

function App() {

  const pageId = useSelector(state => state.registrate.get('pageId'));

  return (
    <BrowserRouter>
      <Header pageId={pageId} />
      <Route path='/' exact component={Popular} />
      <Route path='/registrate' exact component={Registrate} />
      <Route path='/management' exact component={Management} />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
