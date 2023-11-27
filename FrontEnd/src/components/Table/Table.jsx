import { useState } from "react";
import "./Table.css";
import lapis from "../../assets/editar.png";
import lixeira from "../../assets/excluir.png";
import seta from "../../assets/seta.png";
import ModalRemover from "../Modal/ModalRemover";
import ModalAlterar from "../Modal/ModalAlterar";
import ModalCadastrar from "../Modal/ModalCadastrar";
import { Link } from "react-router-dom";

function Table(props) {
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
                </tr>
            );
        }
        return emptyRows;
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [idDelete, setIdDelete] = useState(-1);
    const [actionType, setActionType] = useState(null);

    const openModal = (id, type) => {
        setIsModalOpen(true);
        setIdDelete(id);
        setActionType(type);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirm = () => {
        // Lógica para confirmar a ação
        console.log("confirm");
        closeModal();
    };

    return (
        <div className="table-content">
            <div>
                <table>
                    <thead>
                        <tr>
                            {Object.values(props.columnMapping).map((columnName, index) =>
                                index === 0 ? (
                                    <th className="first-th" key={index}>
                                        {columnName}
                                    </th>
                                ) : (
                                    <th key={index}>{columnName}</th>
                                )
                            )}
                            <th className="last-th">Ações</th>
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
                                                src={lixeira}
                                                alt="lixeira"
                                                className="table-icon"
                                                onClick={() => openModal(item.id, 'remover')}
                                            ></img>
                                            <img
                                                src={lapis}
                                                alt="lapis"
                                                className="table-icon"
                                                onClick={() => openModal(item.id, 'alterar')}
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
                                                src={lixeira}
                                                alt="lixeira"
                                                className="table-icon"
                                                onClick={() => openModal(item.id, 'remover')}
                                            ></img>
                                            <img
                                                src={lapis}
                                                alt="lapis"
                                                className="table-icon"
                                                onClick={() => openModal(item.id, 'alterar')}
                                            ></img>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="table-footer">
                <div className="table-pages-count">
                    <span>Página </span>
                    <div className="dropdown">
                        <button className="dropbtn">
                            {index}{" "}
                            <img src={seta} alt="seta" className="table-icon-seta"></img>
                        </button>

                        <div className="dropdown-content">
                            {pagesIndex.map((i) => (
                                <button key={i} onClick={() => updateIndexAndArray(i)}>
                                    {i}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="table-add-link">
                    <span className="table-add-button" onClick={() => openModal(null, 'adicionar')}>+ adicionar</span>
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
                    <ModalAlterar
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        onConfirm={handleConfirm}
                    />
                )}
                {isModalOpen && actionType === 'adicionar' && (
                    <ModalCadastrar
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        onConfirm={handleConfirm}
                    />
                )}
            </div>
        </div>
    );
}

export default Table;