import React, { useState, useEffect } from "react";
import "./ModalAlterar.css";

const ModalAlterarItemPedido = ({ isOpen, onClose, onConfirm, itemPedidoAtual }) => {
    const [formData, setFormData] = useState({
        id_produto: itemPedidoAtual.id_produto,
        quantidade_pedida: itemPedidoAtual.quantidade_pedida,
        preco: itemPedidoAtual.preco,
        id_venda: itemPedidoAtual.id_venda,
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
            console.log(formData);
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
                                <label>Id_Produto</label>
                                <input
                                    type="number"
                                    name="id_produto"
                                    value={formData.id_produto}
                                    onChange={handleInputChange}
                                    className={`formInputModalAlterar ${formErrors.id_produto ? "error" : ""
                                        }`}
                                />
                            </div>
                            
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

                            <div className="formModalAlterar">
                                <label>Id_Venda</label>
                                <input
                                    type="number"
                                    name="id_venda"
                                    value={formData.id_venda}
                                    onChange={handleInputChange}
                                    className={`formInputModalAlterar ${formErrors.id_venda ? "error" : ""
                                        }`}
                                />
                                {formErrors.id_venda && (
                                    <p className="mensagemError">{formErrors.id_venda}</p>
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