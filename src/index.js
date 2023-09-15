import React from 'react'
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
// import Outle from './Outlet';
// import Test from './Test';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
    {/* <Outle /> */}
    {/* < Test /> */}
  </React.StrictMode>
);

// export default index
