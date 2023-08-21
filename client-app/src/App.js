import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Order from "./pages/Order";
import Cabinet from "./pages/Cabinet";


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductPage />}/>
          <Route path="/order/:cartId" element={<Order/>}/>
          <Route path="/cabinet/:username" element={<Cabinet/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;