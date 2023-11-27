import React, { FC, MouseEvent } from "react";
import './ModalRemover.css';

const ModalRemover = ({ isOpen, onClose, onConfirm, id }) => {
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