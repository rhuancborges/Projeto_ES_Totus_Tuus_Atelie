import React, { useState } from "react";
import "./ModalCadastrar.css";
import api from "../../services/api"

const ModalCadastrarItemPedido = ({ isOpen, onClose, onConfirm, id }) => {
    const [formData, setFormData] = useState({
        id_produto: 0,
        quantidade_pedida: 0,
        preco: 0,
        id_venda: 0,
    });

    const [formErrors, setFormErrors] = useState({});

    const handleCancel = () => {
        onClose();
    };

    async function postPedido() {
        await api.post(`/pedido`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then(res => {
            console.log("Cadastro feito!");
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

        setFormErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            onConfirm(formData);
            onClose();
            postPedido();
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
                <div className="janelaModalCadastrar" onClick={handleOverlayClick}>
                    <div className="contentModalCadastrar">
                        <h1 className="tituloModalCadastrar">CADASTRAR ITEM_PEDIDO</h1>

                        <form>
                            <div className="formModalCadastrar">
                                <label>Id_Produto</label>
                                <input
                                    type="number"
                                    name="id_produto"
                                    value={formData.id_produto}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="formModalCadastrar">
                                <label>Quantidade_Pedida</label>
                                <input
                                    type="number"
                                    name="quantidade_pedida"
                                    value={formData.quantidade_pedida}
                                    onChange={handleInputChange}
                                    className={`formInputModalCadastrar ${formErrors.quantidade_pedida ? "error" : ""}`}
                                />
                                {formErrors.quantidade_pedida && (
                                    <p className="mensagemError">{formErrors.quantidade_pedida}</p>
                                )}
                            </div>

                            <div className="formModalCadastrar">
                                <label>Preço</label>
                                <input
                                    type="number"
                                    name="preco"
                                    value={formData.preco}
                                    onChange={handleInputChange}
                                    className={`formInputModalCadastrar ${formErrors.preco ? "error" : ""}`}
                                />
                                {formErrors.preco && (
                                    <p className="mensagemError">{formErrors.preco}</p>
                                )}
                            </div>

                            <div className="formModalCadastrar">
                                <label>Id_Venda</label>
                                <input
                                    type="number"
                                    name="id_venda"
                                    value={formData.id_venda}
                                    onChange={handleInputChange}
                                />
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

export default ModalCadastrarItemPedido;