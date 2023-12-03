import React, { useEffect, useState } from 'react';
import './Venda.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import TabelaVenda from "../../components/Tabela/TabelaVenda";
import items from "../../components/Tabela/itensVenda.json";

const columnMapping = {
    id_venda: "Id_Venda",
    id_cliente: "Id_Cliente",
    quantidade_total: "Quantidade_Total",
    preco_total: "Preço_Total",
};

function Venda() {
    const [res, setRes] = useState([]);
    const getRes = () => {
        axios.get("http://127.0.0.1:3333/venda").then(res => {
            console.log(res);
            const resultado = res.data;
            setRes(resultado);
        });
    };
    useEffect(() => getRes(), [])

    return (
        <div className='paginaVenda'>
            <Navbar />
            <h1 className='tituloPagina'>GERENCIAR VENDA</h1>
            <div className="corpoVenda">
                <TabelaVenda columnMapping={columnMapping} data={items} />
            </div>
        </div>
    )
}

export default Venda;