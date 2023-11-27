import React from 'react';
import './Cliente.css';
import Navbar from '../../components/Navbar/Navbar';

function Cliente() {
    return (
    <div className='paginaCliente'>
        <Navbar />
        <h1 className='tituloPagina'>GERENCIAR CLIENTE</h1>
    </div>
    )
}

export default Cliente;