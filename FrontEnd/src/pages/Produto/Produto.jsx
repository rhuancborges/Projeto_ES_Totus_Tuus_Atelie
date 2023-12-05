import React, { useEffect, useState } from 'react';
import './Produto.css';
import Navbar from '../../components/Navbar/Navbar';
import TabelaProduto from "../../components/Tabela/TabelaProduto";
import api from "../../services/api"

const columnMapping = {
    id_produto: "Id_Produto",
    nome: "Nome",
    descricao: "Descrição",
    categoria: "Categoria",
    quantidade_estoque: "Quantidade_Estoque",
};

function Produto() {
    const [res, setRes] = useState([]);
    async function getRes() {
        await api.get("/produto",{
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
        <div className="paginaProduto">
            <Navbar />
            <h1 className="tituloPagina">GERENCIAR PRODUTO</h1>
            <div className="corpoProduto">
                <TabelaProduto columnMapping={columnMapping} data={res} />
            </div>
        </div>
    )
}

export default Produto;