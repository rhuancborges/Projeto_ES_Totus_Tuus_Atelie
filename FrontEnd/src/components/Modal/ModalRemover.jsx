import React, { FC, MouseEvent } from "react";
import './ModalRemover.css';
import api from "../../services/api"

const ModalRemover = ({ isOpen, onClose, onConfirm, id, tipo}) => {
    const handleCancel = () => {
        onClose();
    };

    const handleConfirmAction = () => {
        onConfirm();
        onClose();
        console.log(id)
        if(tipo == "produto"){
            delProd()
        } else if(tipo == "cliente"){
            delCliente()
        } else if(tipo == "venda"){
            delVenda()
        } else if(tipo == "pedido"){
            delPedido()
        }
    };

    async function delProd() {
        await api.delete(`/produto/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then(res => {
            console.log("Delete feito!");
        });
    };

    async function delCliente() {
        await api.delete(`/cliente/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then(res => {
            console.log("Delete feito!");
        });
    };

    async function delVenda() {
        await api.delete(`/venda/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then(res => {
            console.log("Delete feito!");
        });
    };

    async function delPedido() {
        await api.delete(`/pedido/${id.id_produto}/${id.id_venda}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then(res => {
            console.log("Delete feito!");
        });
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {isOpen && (
                <div className="janelaModalRemover" onClick={handleOverlayClick}>
                    <div className="contentModalRemover">
                        <p className="textoConfirmacaoModalRemover">Você tem certeza que deseja deletar o registro selecionado?</p>
                        <div className="botoesModal">
                            <p className="botaoCancelar" onClick={handleCancel}>
                                CANCELAR
                            </p>
                            <button className="botaoConfirmar" onClick={handleConfirmAction}>
                                CONFIRMAR
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalRemover;