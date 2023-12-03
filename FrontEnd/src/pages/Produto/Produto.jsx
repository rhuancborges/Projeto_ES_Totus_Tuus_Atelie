import React, { useEffect, useState } from 'react';
import './Produto.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import TabelaProduto from "../../components/Tabela/TabelaProduto";
import items from "../../components/Tabela/itensProduto.json";

const columnMapping = {
    id_produto: "Id_Produto",
    nome: "Nome",
    descricao: "Descrição",
    categoria: "Categoria",
    quantidade_estoque: "Quantidade_Estoque",
};

function Produto() {
    const [res, setRes] = useState([]);
    const getRes = () => {
        axios.get("http://127.0.0.1:3333/produto").then(res => {
            console.log(res);
            const resultado = res.data;
            setRes(resultado);
        });
    };
    useEffect(() => getRes(), [])

    return (
        <div className="paginaProduto">
            <Navbar />
            <h1 className="tituloPagina">GERENCIAR PRODUTO</h1>
            <div className="corpoProduto">
                <TabelaProduto columnMapping={columnMapping} data={items} />
                {/* res */}
            </div>
        </div>
    )
}

export default Produto;