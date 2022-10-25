import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Pantalones } from "../pages/Pantalones";
import { Zapatillas } from "../pages/Zapatillas";
import Layout from "../Containers/Layout";
import { Camisetas } from "../pages/Camisetas";
import { DetailProduct } from "../pages/DetailProduct";
import Prueba from "../pages/prueba/Prueba";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Cart from "../pages/Cart/Cart";
import { SearchPage } from "../pages/SearchPage";
import { MyOrders } from "../pages/MyOrders";
// import AuthProvider from "../../context/AuthContext";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pantalones" element={<Pantalones />} />
          <Route exact path="/zapatillas" element={<Zapatillas />} />
          <Route exact path="/search-products" element={<SearchPage />} />
          <Route exact path="/mis-pedidos" element={<MyOrders />} />
          <Route
            exact
            // path="/zapatillas/:productId"
            path="/product-detail/:productId"
            element={<DetailProduct />}
          />
          <Route exact path="/camisetas" element={<Camisetas />} />
          <Route
            exact
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/user"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
