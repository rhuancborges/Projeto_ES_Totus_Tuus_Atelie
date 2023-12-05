import React, { useState, useEffect } from "react";
import "./ModalAlterar.css";
import api from "../../services/api"

const ModalAlterarProduto = ({ isOpen, onClose, onConfirm, id, produtoAtual }) => {
    const [formData, setFormData] = useState({
        nome: produtoAtual.nome,
        descricao: produtoAtual.descricao,
        categoria: produtoAtual.categoria,
        quantidade_estoque: produtoAtual.quantidade_estoque,
    });

    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        // Atualiza o estado do formulário quando o produtoAtual muda
        setFormData({
            ...formData,
            ...produtoAtual,
        });
    }, [produtoAtual]);

    const handleCancel = () => {
        onClose();
    };

    async function patchProd() {
        await api.patch(`/produto/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then(res => {
            console.log("Patch feito!");
        });
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
            newErrors.categoria = "*Categoria deve ter no máximo 20 caracteres.";
        }

        if (formData.quantidade_estoque < 0) {
            newErrors.quantidade_estoque = "*Quantidade não pode ser negativa.";
        }

        setFormErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            onConfirm(formData);
            onClose();
            patchProd(formData);
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
                        <h1 className="tituloModalAlterar">ALTERAR PRODUTO</h1>

                        <form>
                            <div className="formModalAlterar">
                                <label>Nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleInputChange}
                                    className={`formInputModalAlterar ${formErrors.nome ? "error" : ""}`}
                                    maxLength={20}
                                />
                                {formErrors.nome && <p className="mensagemError">{formErrors.nome}</p>}
                            </div>

                            <div className="formModalAlterar">
                                <label>Descrição</label>
                                <input
                                    type="text"
                                    name="descricao"
                                    value={formData.descricao}
                                    onChange={handleInputChange}
                                    className={`formInputModalAlterar ${formErrors.descricao ? "error" : ""}`}
                                    maxLength={140}
                                />
                                {formErrors.descricao && (
                                    <p className="mensagemError">{formErrors.descricao}</p>
                                )}
                            </div>

                            <div className="formModalAlterar">
                                <label>Categoria</label>
                                <input
                                    type="text"
                                    name="categoria"
                                    value={formData.categoria}
                                    onChange={handleInputChange}
                                    maxLength={20}
                                />
                                {formErrors.categoria && (
                                    <p className="mensagemError">{formErrors.categoria}</p>
                                )}
                            </div>

                            <div className="formModalAlterar">
                                <label>Quantidade_Estoque</label>
                                <input
                                    type="number"
                                    name="quantidade_estoque"
                                    value={formData.quantidade_estoque}
                                    onChange={handleInputChange}
                                    className={`formInputModalAlterar ${formErrors.quantidade_estoque ? "error" : ""}`}
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

export default ModalAlterarProduto;