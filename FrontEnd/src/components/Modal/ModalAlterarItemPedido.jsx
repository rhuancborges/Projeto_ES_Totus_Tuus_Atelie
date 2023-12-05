import React, { useState, useEffect } from "react";
import "./ModalAlterar.css";
import api from "../../services/api"

const ModalAlterarItemPedido = ({ isOpen, onClose, onConfirm, itemPedidoAtual }) => {
    const [formData, setFormData] = useState({
        quantidade_pedida: itemPedidoAtual.quantidade_pedida,
        preco: itemPedidoAtual.preco,
    });

    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        // Atualiza o estado do formulário quando o itemPedidoAtual muda
        setFormData({
            ...formData,
            ...itemPedidoAtual,
        });
    }, [itemPedidoAtual]);

    const handleCancel = () => {
        onClose();
    };

    async function patchPedido() {
        await api.patch(`/pedido/${itemPedidoAtual.id_produto}/${itemPedidoAtual.id_venda}`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then(res => {
            console.log("Patch feito!");
        });
    };

    const handleConfirmAction = () => {
        const newErrors = {};

        if (formData.quantidade_pedida <= 0) {
            newErrors.quantidade_pedida = "*Quantidade pedida deve ser maior que zero.";
        }

        if (formData.preco <= 0) {
            newErrors.preco = "*Preço deve ser maior que zero.";
        }

        // Validação adicional, se necessário

        setFormErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            onConfirm(formData);
            onClose();
            patchPedido();
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
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
                        <h1 className="tituloModalAlterar">ALTERAR ITEM_PEDIDO</h1>

                        <form>
                            <div className="formModalAlterar">
                                <label>Quantidade_Pedida</label>
                                <input
                                    type="number"
                                    name="quantidade_pedida"
                                    value={formData.quantidade_pedida}
                                    onChange={handleInputChange}
                                    className={`formInputModalAlterar ${formErrors.quantidade_pedida ? "error" : ""
                                        }`}
                                />
                                {formErrors.quantidade_pedida && (
                                    <p className="mensagemError">{formErrors.quantidade_pedida}</p>
                                )}
                            </div>

                            <div className="formModalAlterar">
                                <label>Preço</label>
                                <input
                                    type="number"
                                    name="preco"
                                    value={formData.preco}
                                    onChange={handleInputChange}
                                    className={`formInputModalAlterar ${formErrors.preco ? "error" : ""
                                        }`}
                                />
                                {formErrors.preco && (
                                    <p className="mensagemError">{formErrors.preco}</p>
                                )}
                            </div>
                        </form>

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
    );
};

export default ModalAlterarItemPedido;