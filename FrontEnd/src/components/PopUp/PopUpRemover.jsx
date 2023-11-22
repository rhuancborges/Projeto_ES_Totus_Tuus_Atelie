import React, { FC, MouseEvent } from "react";
import './PopUpRemover.css';

function PopUpRemover() {
    return (
        <div className="janela" onClick={handleOverlayClick}>
            <p className="textoConfirmacao">Você tem certeza que deseja deletar o registro selecionado?</p>
            <div className="botoesPopUp">
                <p className="botaoCancelar" onClick={handleCancel}>
                    Cancelar
                </p>
                <p className="botaoConfirmar" onClick={handleConfirmAction}>
                    Confirmar
                </p>
            </div>
        </div>
    )
}

export default PopUpRemover;