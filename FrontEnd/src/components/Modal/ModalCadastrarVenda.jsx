import React, { useState } from "react";
import "./ModalCadastrar.css";
import api from "../../services/api"

const ModalCadastrarVenda = ({ isOpen, onClose, onConfirm, id }) => {
    const [produtos, setProdutos] = useState([]);
    const [produtoId, setProdutoId] = useState(0);
    const [preco, setPreco] = useState(0);
    const [quantidade_pedida, setQuantidadePedida] = useState(0);

    const [formData, setFormData] = useState({
        id_venda: id,
        id_cliente: 0,
        quantidade_total: 0,
        preco_total: 0,
        produtos: produtos
    });

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
            console.log(formData)
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


    const adicionarProduto = (e) => {
        e.preventDefault();
        console.log(produtos)
        setProdutos([...produtos, { idproduto: produtoId, quantidade_pedida: quantidade_pedida, preco: preco}]);
        setProdutoId(0);
        setQuantidadePedida(0);
        setPreco(0);
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
                                <label>Cadastrando Produtos</label>
                                <button onClick={(e) => adicionarProduto(e)}>Adicionar Produto</button>
                            </div>

                            <div className="formModalCadastrar">
                                <input
                                    name="id_produto"
                                    onChange={(e) => setProdutoId(e.target.value)}
                                    type="number"
                                    placeholder={`Id do Produto`}
                                />
                                <input
                                    name="quantidade_pedida"
                                    onChange={(e) => setQuantidadePedida(e.target.value)}
                                    type="number"
                                    placeholder={`Quantidade Pedida`}
                                />
                                <input
                                    name="preco"
                                    onChange={(e) => setPreco(e.target.value)}
                                    type="number"
                                    placeholder={`Preco`}
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

export default ModalCadastrarVenda;