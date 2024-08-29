import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './w3.css'
//import './App.css'
//import './index.css'

import Layout from "./pages/Layout";
import Layoutcss from "./pages/Layoutcss";
import Home from "./pages/Home";
import App1 from "./pages/App1p";
import App2 from "./pages/App2p";
import App3 from "./pages/App3p";
import App4 from "./pages/nr4/App4p";
import App5 from "./pages/App5p";
import NoPage from "./pages/NoPage";


export default function RouteApp() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layoutcss />}>
               <Route index element={<Home />} />
               <Route path="App1" element={<App1 />} />
               <Route path="App2" element={<App2 />} />
               <Route path="App3" element={<App3 />} />
               <Route path="nr4/App4" element={<App4 />} />
               <Route path="App5" element={<App5 />} />
               <Route path="*" element={<NoPage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouteApp />
   </React.StrictMode>,
)

// installeer react-router-dom
// op de commandline in de root van het project:  npm i -D react-router-dom