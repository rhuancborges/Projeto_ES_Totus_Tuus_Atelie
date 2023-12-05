import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Produto from '../pages/Produto/Produto';
import Cliente from '../pages/Cliente/Cliente';
import ItemPedido from '../pages/ItemPedido/ItemPedido';
import Venda from '../pages/Venda/Venda';

const HomeRoutes = () => {
  return (
      <Router>
        <Routes>
          <Route path="/produto" element={<Produto />}></Route>
          <Route path="/cliente" element={<Cliente />}></Route>
          <Route path="/itempedido" element={<ItemPedido />}></Route>
          <Route path="/venda" element={<Venda />}></Route>
        </Routes>
      </Router>
  );
}

export default HomeRoutes;