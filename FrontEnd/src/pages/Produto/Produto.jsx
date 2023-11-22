import React from 'react';
import './Produto.css';
import Navbar from '../../components/Navbar/Navbar';

// import Table from "../../components/Table/Table";
// import items from "../../components/Table/itens.json";

// const columnMapping = {
//     id_produto: "Id_Produto",
//     nome: "Nome",
//     descricao: "Descrição",
//     categoria: "Categoria",
//     quantidade_estoque: "Quantidade_Estoque",
// };

function Produto() {
    return (
        <div>
            <Navbar />
            <h1 className="tituloPagina">GERENCIAR PRODUTO</h1>
            {/* <Table columnMapping={columnMapping} data={items} /> */}
        </div>
    );
}

export default Produto;