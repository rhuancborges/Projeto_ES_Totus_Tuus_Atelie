import React, { useEffect, useState } from 'react';
import './Venda.css';
import Navbar from '../../components/Navbar/Navbar';
import TabelaVenda from "../../components/Tabela/TabelaVenda";
import api from "../../services/api"

const columnMapping = {
    id_venda: "Id_Venda",
    id_cliente: "Id_Cliente",
    quantidade_total: "Quantidade_Total",
    preco_total: "Preço_Total",
};

function Venda() {
    const [res, setRes] = useState([]);
    async function getRes() {
        await api.get("/venda",{
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
        <div className='paginaVenda'>
            <Navbar />
            <h1 className='tituloPagina'>GERENCIAR VENDA</h1>
            <div className="corpoVenda">
                <TabelaVenda columnMapping={columnMapping} data={res} />
            </div>
        </div>
    )
}

export default Venda;