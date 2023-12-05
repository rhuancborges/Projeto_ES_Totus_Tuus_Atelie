import React, { useState } from "react";
import "./ModalCadastrar.css";
import api from "../../services/api"

const ModalCadastrarItemPedido = ({ isOpen, onClose, onConfirm, id }) => {
    const [formData, setFormData] = useState({
        id_venda: id,
        id_cliente: 0,
        quantidade_total: 0,
        preco_total: 0,
        produtos: []
    });

    const [selectedValue, setSelectedValue] = useState(1);

    const handleDropdownChange = (e) => {
        setSelectedValue(parseInt(e.target.value, 10));
    };

    const [formErrors, setFormErrors] = useState({});

    const handleCancel = () => {
        onClose();
    };

    async function postVenda() {
        await api.post(`/venda`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then(res => {
            console.log("Cadastro feito!");
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

        setFormErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            onConfirm(formData);
            onClose();
            postVenda();
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleInputChangeArray = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            
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
                        <h1 className="tituloModalCadastrar">CADASTRAR VENDA</h1>

                        <form>
                            <div className="formModalCadastrar">
                                <label>Id_Cliente</label>
                                <input
                                    type="number"
                                    name="id_cliente"
                                    value={formData.id_cliente}
                                    onChange={handleInputChange}
                                    className={`formInputModalCadastrar ${formErrors.id_cliente ? "error" : ""
                                        }`}
                                />
                            </div>

                            <div className="formModalCadastrar">
                                <label>Quantidade_Total</label>
                                <input
                                    type="number"
                                    name="quantidade_total"
                                    value={formData.quantidade_total}
                                    onChange={handleInputChange}
                                    className={`formInputModalCadastrar ${formErrors.quantidade_total ? "error" : ""
                                        }`}
                                />
                                {formErrors.quantidade_total && (
                                    <p className="mensagemError">{formErrors.quantidade_total}</p>
                                )}
                            </div>

                            <div className="formModalCadastrar">
                                <label>Preço_Total</label>
                                <input
                                    type="number"
                                    name="preco_total"
                                    value={formData.preco_total}
                                    onChange={handleInputChange}
                                    className={`formInputModalCadastrar ${formErrors.preco_total ? "error" : ""
                                        }`}
                                />
                                {formErrors.preco_total && (
                                    <p className="mensagemError">{formErrors.preco_total}</p>
                                )}
                            </div>

                            <div className="formModalCadastrar">
                                <label>Quantidade de Produtos</label>
                                <select className="formModalCadastrar" id="dropdown" onChange={handleDropdownChange} value={selectedValue}>
                                    {[...Array(10)].map((_, index) => (
                                        <option key={index + 1} value={index + 1}>
                                            {index + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="formModalCadastrar">
                                {[...Array(selectedValue)].map((_, index) => (
                                    <div>
                                    <input
                                        name="id_produto"
                                        key={index}
                                        onChange={handleInputChangeArray}
                                        type="number"
                                        placeholder={`Id do Produto${index + 1}`}
                                    />
                                    <input
                                        name="quantidade_pedida"
                                        key={index}
                                        onChange={handleInputChangeArray}
                                        type="number"
                                        placeholder={`Quantidade Pedida${index + 1}`}
                                    />
                                    <input
                                        name="preco"
                                        key={index}
                                        onChange={handleInputChangeArray}
                                        type="number"
                                        placeholder={`Preco ${index + 1}`}
                                    />
                                    </div>
                                ))}
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