import React, { useEffect, useState } from 'react';
import './ItemPedido.css';
import Navbar from '../../components/Navbar/Navbar';
import TabelaItemPedido from "../../components/Tabela/TabelaItemPedido";
import api from "../../services/api"

const columnMapping = {
    id_produto: "Id_Produto",
    quantidade_pedida: "Quantidade_Pedida",
    preco: "Preço",
    id_venda: "Id_Venda",
};

function ItemPedido() {
    const [res, setRes] = useState([]);
    async function getRes() {
        await api.get("/pedido",{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then(res => {
            const resultado = res.data;
            setRes(resultado);
        });
    };

    useEffect(() => {getRes()}, [])
    return (
        <div className='paginaItemPedido'>
            <Navbar />
            <h1 className='tituloPagina'>GERENCIAR ITEM_PEDIDO</h1>
            <div className="corpoItemPedido">
                <TabelaItemPedido columnMapping={columnMapping} data={res} />
            </div>
        </div>
    )
}

export default ItemPedido;