import React, { useState, useEffect } from "react";
import "./ModalAlterar.css";
import api from "../../services/api"

const ModalAlterarCliente = ({ isOpen, onClose, onConfirm, id, clienteAtual }) => {
    const [formData, setFormData] = useState({
        cpf: clienteAtual.cpf,
        nome: clienteAtual.nome,
        telefone: clienteAtual.telefone,
        endereco: clienteAtual.endereco,
    });

    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        // Atualiza o estado do formulário quando o clienteAtual muda
        setFormData({
            cpf: clienteAtual.cpf,
            nome: clienteAtual.nome,
            telefone: clienteAtual.telefone,
            endereco: clienteAtual.endereco,
        });
    }, [clienteAtual]);

    const handleCancel = () => {
        onClose();
    };

    async function patchCliente() {
        await api.patch(`/cliente/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }).then(res => {
            console.log("Patch feito!");
        });
    };

    const handleConfirmAction = () => {
        const newErrors = {};

        if (!formData.cpf.trim()) {
            newErrors.cpf = "*CPF não pode estar vazio.";
        } else if (!/^\d{11}$/.test(formData.cpf)) {
            newErrors.cpf = "*CPF deve ter 11 caracteres numéricos.";
        }

        if (!formData.nome.trim()) {
            newErrors.nome = "*Nome não pode estar vazio.";
        } else if (formData.nome.length > 50) {
            newErrors.nome = "*Nome deve ter no máximo 50 caracteres.";
        }

        if (!formData.telefone.trim()) {
            newErrors.telefone = "*Telefone não pode estar vazio.";
        } else if (formData.telefone.length !== 11) {
            newErrors.telefone = "*Telefone deve ter 11 caracteres.";
        }

        if (!formData.endereco.trim()) {
            newErrors.endereco = "*Endereço não pode estar vazio.";
        } else if (formData.endereco.length > 50) {
            newErrors.endereco = "*Endereço deve ter no máximo 50 caracteres.";
        }

        setFormErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            onConfirm(formData);
            onClose();
            patchCliente(id);
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
                        <h1 className="tituloModalAlterar">ALTERAR CLIENTE</h1>

                        <form>
                            <div className="formModalAlterar">
                                <label>CPF</label>
                                <input
                                    type="text"
                                    name="cpf"
                                    value={formData.cpf}
                                    onChange={handleInputChange}
                                    className={`formInputModalAlterar ${formErrors.cpf ? "error" : ""}`}
                                    maxLength={11}
                                />
                                {formErrors.cpf && <p className="mensagemError">{formErrors.cpf}</p>}
                            </div>

                            <div className="formModalAlterar">
                                <label>Nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleInputChange}
                                    className={`formInputModalAlterar ${formErrors.nome ? "error" : ""}`}
                                    maxLength={50}
                                />
                                {formErrors.nome && <p className="mensagemError">{formErrors.nome}</p>}
                            </div>

                            <div className="formModalAlterar">
                                <label>Telefone</label>
                                <input
                                    type="text"
                                    name="telefone"
                                    value={formData.telefone}
                                    onChange={handleInputChange}
                                    className={`formInputModalAlterar ${formErrors.telefone ? "error" : ""}`}
                                    maxLength={11}
                                />
                                {formErrors.telefone && <p className="mensagemError">{formErrors.telefone}</p>}
                            </div>

                            <div className="formModalAlterar">
                                <label>Endereço</label>
                                <input
                                    type="text"
                                    name="endereco"
                                    value={formData.endereco}
                                    onChange={handleInputChange}
                                    className={`formInputModalAlterar ${formErrors.endereco ? "error" : ""}`}
                                    maxLength={50}
                                />
                                {formErrors.endereco && <p className="mensagemError">{formErrors.endereco}</p>}
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

export default ModalAlterarCliente;