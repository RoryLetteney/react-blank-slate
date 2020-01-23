// NPM PACKAGE IMPORTS
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// REDUX IMPORTS
import store from "../redux/store";

// COMPONENT IMPORTS
import Header from "./layout/header/Header";
import Body from "./layout/body/Body";
import Footer from "./layout/footer/Footer";

// STYLE IMPORTS
import "./styles/app.scss";

// EXPORTS
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Body></Body>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
