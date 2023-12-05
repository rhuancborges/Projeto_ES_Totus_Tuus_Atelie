import React, { useState, useEffect } from "react";
import "./ModalAlterar.css";
import api from "../../services/api"

const ModalAlterarVenda = ({ isOpen, onClose, onConfirm, vendaAtual, id}) => {
    const [formData, setFormData] = useState({
        id_cliente: vendaAtual.id_cliente,
        quantidade_total: vendaAtual.quantidade_total,
        preco_total: vendaAtual.preco_total,
    });

    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        // Atualiza o estado do formulário quando a vendaAtual muda
        setFormData({
            id_cliente: vendaAtual.id_cliente,
            quantidade_total: vendaAtual.quantidade_total,
            preco_total: vendaAtual.preco_total,
        });
    }, [vendaAtual]);

    const handleCancel = () => {
        onClose();
    };

    async function patchVenda() {
        await api.patch(`/venda/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then(res => {
            console.log("Patch feito!");
        });
    };

    const handleConfirmAction = () => {
        const newErrors = {};

        if (formData.quantidade_total <= 0) {
            newErrors.quantidade_total = "*Quantidade total deve ser maior que zero.";
        }

        if (formData.preco_total <= 0) {
            newErrors.preco_total = "*Preço total deve ser maior que zero.";
        }

        // Validação adicional, se necessário

        setFormErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            onConfirm(formData);
            onClose();
            patchVenda();
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
                        <h1 className="tituloModalAlterar">ALTERAR VENDA</h1>

                        <form>
                            <div className="formModalAlterar">
                                <label>Id_Cliente</label>
                                <input
                                    type="number"
                                    name="id_cliente"
                                    value={formData.id_cliente}
                                    onChange={handleInputChange}
                                    className={`formInputModalAlterar ${formErrors.id_cliente ? "error" : ""
                                        }`}
                                />
                            </div>

                            <div className="formModalAlterar">
                                <label>Quantidade_Total</label>
                                <input
                                    type="number"
                                    name="quantidade_total"
                                    value={formData.quantidade_total}
                                    onChange={handleInputChange}
                                    className={`formInputModalAlterar ${formErrors.quantidade_total ? "error" : ""
                                        }`}
                                />
                                {formErrors.quantidade_total && (
                                    <p className="mensagemError">{formErrors.quantidade_total}</p>
                                )}
                            </div>

                            <div className="formModalAlterar">
                                <label>Preço_Total</label>
                                <input
                                    type="number"
                                    name="preco_total"
                                    value={formData.preco_total}
                                    onChange={handleInputChange}
                                    className={`formInputModalAlterar ${formErrors.preco_total ? "error" : ""
                                        }`}
                                />
                                {formErrors.preco_total && (
                                    <p className="mensagemError">{formErrors.preco_total}</p>
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

export default ModalAlterarVenda;