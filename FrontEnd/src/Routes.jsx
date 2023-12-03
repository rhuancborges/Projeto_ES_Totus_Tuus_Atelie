import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Produto from './pages/Produto/Produto';
import Cliente from './pages/Cliente/Cliente';
import ItemPedido from './pages/ItemPedido/ItemPedido';
import Venda from './pages/Venda/Venda';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/itempedido" element={<ItemPedido />} />
        <Route path="/venda" element={<Venda />} />
      </Routes>
    </BrowserRouter >
  )
}

export default AppRoutes;