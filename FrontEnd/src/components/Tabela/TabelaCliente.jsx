import { useState } from "react";
import "./Tabela.css";
import iconeEditar from "../../assets/editar.png";
import iconeExcluir from "../../assets/excluir.png";
import seta from "../../assets/seta.png";
import ModalRemover from "../Modal/ModalRemover";
import ModalAlterarCliente from "../Modal/ModalAlterarCliente";
import ModalCadastrarCliente from "../Modal/ModalCadastrarCliente";

function TabelaCliente(props) {
    const [index, setIndex] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    let rowsNumber = 10;
    let pagesNumber = Math.floor(props.data.length / rowsNumber);
    let rowsNumberLastPage = rowsNumber - Math.floor(props.data.length % rowsNumber);
    let pagesIndex = [];
    let displayedItems = props.data.slice(startIndex, startIndex + rowsNumber);

    if (rowsNumberLastPage !== 0) pagesNumber++;

    for (let i = 1; i <= pagesNumber; i++) {
        pagesIndex.push(i);
    }

    function updateIndexAndArray(i) {
        setIndex(i);
        setStartIndex((i - 1) * rowsNumber);
    }

    function emptyRows() {
        let emptyRows = [];
        for (let i = 0; i < rowsNumberLastPage; i++) {
            emptyRows.push(
                <tr key={i}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            );
        }
        return emptyRows;
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [idDelete, setIdDelete] = useState(-1);
    const [actionType, setActionType] = useState(null);
    const [clienteAtual, setClienteAtual] = useState({});

    const openModal = (id, type) => {
        setIsModalOpen(true);
        setIdDelete(id);
        setActionType(type);
    };

    const openModalAlterar = (cliente) => {
        setClienteAtual(cliente);
        setIsModalOpen(true);
        setActionType('alterar');
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirm = () => {
        console.log("confirm");
        closeModal();
    };

    return (
        <div className="tabelaContainer">
            <div>
                <table>
                    <thead>
                        <tr>
                            {Object.values(props.columnMapping).map((columnName, index) =>
                                index === 0 ? (
                                    <th className="primeiraColunaCabecalho" key={index}>
                                        {columnName}
                                    </th>
                                ) : (
                                    <th key={index}>{columnName}</th>
                                )
                            )}
                            <th className="ultimaColunaCabecalho">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {index === pagesNumber ? (
                            <>
                                {displayedItems.map((item, index) => (
                                    <tr key={index}>
                                        {Object.keys(props.columnMapping).map(
                                            (key, columnIndex) => (
                                                <td key={columnIndex}>{item[key]}</td>
                                            )
                                        )}
                                        <td>
                                            <img
                                                src={iconeExcluir}
                                                alt="iconeExcluir"
                                                className="tabelaIcone"
                                                onClick={() => openModal(item.id, 'remover')}
                                            ></img>
                                            <img
                                                src={iconeEditar}
                                                alt="iconeEditar"
                                                className="tabelaIcone"
                                                onClick={() => openModalAlterar(item)}
                                            ></img>
                                        </td>
                                    </tr>
                                ))}
                                {emptyRows().map((row) => row)}
                            </>
                        ) : (
                            <>
                                {displayedItems.map((item, index) => (
                                    <tr key={index}>
                                        {Object.keys(props.columnMapping).map(
                                            (key, columnIndex) => (
                                                <td key={columnIndex}>{item[key]}</td>
                                            )
                                        )}
                                        <td>
                                            <img
                                                src={iconeExcluir}
                                                alt="iconeExcluir"
                                                className="tabelaIcone"
                                                onClick={() => openModal(item.id, 'remover')}
                                            ></img>
                                            <img
                                                src={iconeEditar}
                                                alt="iconeEditar"
                                                className="tabelaIcone"
                                                onClick={() => openModalAlterar(item)}
                                            ></img>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="tabelaRodape">
                <div className="contagemPaginas">
                    <p>Página</p>
                    <div className="controleDropdown">
                        <button className="botaoDropdown">
                            {index}{" "}
                            <img src={seta} alt="seta" className="tabelaIconeSeta"></img>
                        </button>
                        <div className="menuDropdown">
                            {pagesIndex.map((i) => (
                                <button key={i} onClick={() => updateIndexAndArray(i)}>
                                    {i}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="containerAdicionar">
                    <span className="botaoAdicionar" onClick={() => openModal(null, 'adicionar')}>+ adicionar</span>
                </div>
            </div>
            <div>
                {isModalOpen && actionType === 'remover' && (
                    <ModalRemover
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        onConfirm={handleConfirm}
                        id={idDelete}
                    />
                )}
                {isModalOpen && actionType === 'alterar' && (
                    <ModalAlterarCliente
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        onConfirm={handleConfirm}
                        clienteAtual={clienteAtual}
                    />
                )}
                {isModalOpen && actionType === 'adicionar' && (
                    <ModalCadastrarCliente
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        onConfirm={handleConfirm}
                    />
                )}
            </div>
        </div>
    );
}

export default TabelaCliente;