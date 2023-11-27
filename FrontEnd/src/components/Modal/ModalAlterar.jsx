import React, { FC, MouseEvent } from "react";
import './ModalAlterar.css';

const ModalAlterar = ({ isOpen, onClose, onConfirm, id }) => {
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
                <div className="janelaModalAlterar" onClick={handleOverlayClick}>
                    <div className="contentModalAlterar">
                        <h1 className="tituloModalAlterar">ALTERAR PRODUTO</h1>
                        
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

export default ModalAlterar;