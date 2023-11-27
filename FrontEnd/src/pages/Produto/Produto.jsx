import React from 'react';
import './Produto.css';
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
    return (
        <div className="paginaProduto">
            <Navbar />
            <h1 className="tituloPagina">GERENCIAR PRODUTO</h1>
            <div className="corpoProduto">
                <Table columnMapping={columnMapping} data={items} />
            </div>
        </div>
    )
}

export default Produto;