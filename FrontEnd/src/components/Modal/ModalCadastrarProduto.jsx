import React, { useState } from "react";
import "./ModalCadastrar.css";

const ModalCadastrarProduto = ({ isOpen, onClose, onConfirm, id }) => {
    const [formData, setFormData] = useState({
        id_produto: id,
        nome: "",
        descricao: "",
        categoria: "",
        quantidade_estoque: 0,
    });

    const [formErrors, setFormErrors] = useState({});

    const handleCancel = () => {
        onClose();
    };

    const handleConfirmAction = () => {
        const newErrors = {};

        if (!formData.nome.trim()) {
            newErrors.nome = "*Nome não pode estar vazio.";
        } else if (formData.nome.length > 20) {
            newErrors.nome = "*Nome deve ter no máximo 20 caracteres.";
        }

        if (!formData.descricao.trim()) {
            newErrors.descricao = "*Descrição não pode estar vazia.";
        } else if (formData.descricao.length > 140) {
            newErrors.descricao = "*Descrição deve ter no máximo 140 caracteres.";
        }

        if (formData.categoria.length > 20) {
            newErrors.descricao = "*Categoria deve ter no máximo 140 caracteres.";
        }

        if (formData.quantidade_estoque < 0) {
            newErrors.quantidade_estoque = "*Quantidade não pode ser negativa.";
        }

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
                <div className="janelaModalCadastrar" onClick={handleOverlayClick}>
                    <div className="contentModalCadastrar">
                        <h1 className="tituloModalCadastrar">CADASTRAR PRODUTO</h1>

                        <form>
                            <div className="formModalCadastrar">
                                <label>Nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleInputChange}
                                    className={`formInputModalCadastrar ${formErrors.nome ? "error" : ""}`}
                                    maxLength={20}
                                />
                                {formErrors.nome && <p className="mensagemError">{formErrors.nome}</p>}
                            </div>

                            <div className="formModalCadastrar">
                                <label>Descrição</label>
                                <input
                                    type="text"
                                    name="descricao"
                                    value={formData.descricao}
                                    onChange={handleInputChange}
                                    className={`formInputModalCadastrar ${formErrors.descricao ? "error" : ""}`}
                                    maxLength={140}
                                />
                                {formErrors.descricao && (
                                    <p className="mensagemError">{formErrors.descricao}</p>
                                )}
                            </div>

                            <div className="formModalCadastrar">
                                <label>Categoria</label>
                                <input
                                    type="text"
                                    name="categoria"
                                    value={formData.categoria}
                                    onChange={handleInputChange}
                                    maxLength={20}
                                />
                            </div>

                            <div className="formModalCadastrar">
                                <label>Quantidade_Estoque</label>
                                <input
                                    type="number"
                                    name="quantidade_estoque"
                                    value={formData.quantidade_estoque}
                                    onChange={handleInputChange}
                                    className={`formInputModalCadastrar ${formErrors.quantidade_estoque ? "error" : ""}`}
                                />
                                {formErrors.quantidade_estoque && (
                                    <p className="mensagemError">{formErrors.quantidade_estoque}</p>
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

export default ModalCadastrarProduto;