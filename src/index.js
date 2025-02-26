//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// This serves as an entry point to the DOM and server renderers for React
import ReactDOM from "react-dom";

//> Font Awesome
// Font Awesome is an awesome icon library
import "@fortawesome/fontawesome-free/css/all.min.css";

//> Bootstrap
import "bootstrap-css-only/css/bootstrap.min.css";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import "mdbreact/dist/css/mdb.css";

//> CSS
// Root SCSS file
import "./index.scss";

//> Components
// Root component
import App from "./App";

//#region > Render

// Render the DOM
ReactDOM.render(<App />, document.getElementById("root"));

//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Christian Aichner
 */
