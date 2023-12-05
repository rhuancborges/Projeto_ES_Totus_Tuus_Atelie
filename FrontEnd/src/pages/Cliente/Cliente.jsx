import React, { useEffect, useState } from 'react';
import './Cliente.css';
import Navbar from '../../components/Navbar/Navbar';
import TabelaCliente from "../../components/Tabela/TabelaCliente";
import api from "../../services/api"

const columnMapping = {
    id_cliente: "Id_Cliente",
    cpf: "CPF",
    nome: "Nome",
    telefone: "Telefone",
    endereco: "Endereço",
};


function Cliente() {
    const [res, setRes] = useState([]);
    async function getRes() {
        await api.get("/cliente",{
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
        <div className='paginaCliente'>
            <Navbar />
            <h1 className='tituloPagina'>GERENCIAR CLIENTE</h1>
            <div className="corpoCliente">
                <TabelaCliente columnMapping={columnMapping} data={res} />
            </div>
        </div>
    )
}

export default Cliente;