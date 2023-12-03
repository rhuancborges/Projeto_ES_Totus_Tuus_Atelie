import React, { useEffect, useState } from 'react';
import './Cliente.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import TabelaCliente from "../../components/Tabela/TabelaCliente";
import items from "../../components/Tabela/itensCliente.json";

const columnMapping = {
    id_cliente: "Id_Cliente",
    cpf: "CPF",
    nome: "Nome",
    telefone: "Telefone",
    endereco: "Endereço",
};


function Cliente() {
    const [res, setRes] = useState([]);
    const getRes = () => {
        axios.get("http://127.0.0.1:3333/cliente").then(res => {
            console.log(res);
            const resultado = res.data;
            setRes(resultado);
        });
    };
    useEffect(() => getRes(), [])

    return (
        <div className='paginaCliente'>
            <Navbar />
            <h1 className='tituloPagina'>GERENCIAR CLIENTE</h1>
            <div className="corpoCliente">
                <TabelaCliente columnMapping={columnMapping} data={items} />
            </div>
        </div>
    )
}

export default Cliente;