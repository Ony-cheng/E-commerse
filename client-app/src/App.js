import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductPage />}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;