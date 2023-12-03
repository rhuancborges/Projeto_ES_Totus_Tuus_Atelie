import React, { useEffect, useState } from 'react';
import './ItemPedido.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import TabelaItemPedido from "../../components/Tabela/TabelaItemPedido";
import items from "../../components/Tabela/itensItemPedido.json";

const columnMapping = {
    id_produto: "Id_Produto",
    quantidade_pedida: "Quantidade_Pedida",
    preco: "Preço",
    id_venda: "Id_Venda",
};


function ItemPedido() {
    const [res, setRes] = useState([]);
    const getRes = () => {
        axios.get("http://127.0.0.1:3333/pedido").then(res => {
            console.log(res);
            const resultado = res.data;
            setRes(resultado);
        });
    };
    useEffect(() => getRes(), [])

    return (
        <div className='paginaItemPedido'>
            <Navbar />
            <h1 className='tituloPagina'>GERENCIAR ITEM_PEDIDO</h1>
            <div className="corpoItemPedido">
                <TabelaItemPedido columnMapping={columnMapping} data={items} />
            </div>
        </div>
    )
}

export default ItemPedido;