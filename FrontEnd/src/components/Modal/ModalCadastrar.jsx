import React, { FC, MouseEvent } from "react";
import './ModalCadastrar.css';

const ModalCadastrar = ({ isOpen, onClose, onConfirm, id }) => {
    const handleCancel = () => {
        onClose();
    };

    const handleConfirmAction = () => {
        onConfirm();
        onClose();
        console.log(id);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {isOpen && (
                <div className="janelaModalAlteral" onClick={handleOverlayClick}>
                    <div className="contentModalCadastrar">
                        <h1 className="tituloModalCadastrar">ALTERAR PRODUTO</h1>
                        
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

export default ModalCadastrar;