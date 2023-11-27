import React, { useEffect, useState } from 'react';
import './Produto.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Table from "../../components/Table/Table";
import items from "../../components/Table/itens.json";

const columnMapping = {
    id_produto: "Id_Produto",
    nome: "Nome",
    descricao: "Descrição",
    categoria: "Categoria",
    quantidade_estoque: "Quantidade_Estoque",
};

function Produto() {
    // Integração com o backend fazendo requisição get
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
                <Table columnMapping={columnMapping} data={res} />
            </div>
        </div>
    )
}

export default Produto;