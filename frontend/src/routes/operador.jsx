import { useState } from "react";
import "../assets/styles/mediaQuery/max1015px.scss";
import "../assets/styles/operador.scss"
import { FaPlus, FaTrash, FaCalendarAlt, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Operador = () => {
    const [showModalAdd, setShowModalAdd] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [nmModuloIn, setnmModuloIn] = useState('');
    const [nmModuloUn, setnmModuloUn] = useState('');
    const [errorIn, setErrorIn] = useState('');
    const [errorUn, setErrorUn] = useState('');

    const installPackage = async () => {
        console.log(nmModuloIn)
        if (!nmModuloIn.trim()) {
            setErrorIn('O nome do módulo é obrigatório!');
            return;
        }

        if (!nmModuloIn.includes('modulo-')) {
            setErrorIn('O nome do módulo deve seguir o padrão "modulo-{nome}"');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/install', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nmModuloIn }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorIn(errorData.error || 'Erro ao instalar o módulo!');
                return;
            }

            const data = await response.json();
            console.log(data);
            setErrorIn('');
            setnmModuloIn('');
            setShowModalAdd(false);
            toast.success(`Módulo  "${nmModuloIn}" instalado com sucesso!`);
        } catch (error) {
            console.error('Erro ao instalar o pacote:', error);
            setErrorIn('Erro ao instalar o módulo!');
        }
    };

    const uninstallPackage = async () => {
        if (!nmModuloUn.trim()) {
            setErrorUn('O nome do módulo é obrigatório!');
            return;
        }

        if (!nmModuloUn.includes('modulo-')) {
            setErrorUn('O nome do módulo deve seguir o padrão "modulo-{nome}"');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/uninstall', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nmModuloUn }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorUn(errorData.error || 'Erro ao desinstalado o módulo!');
                return;
            }

            const data = await response.json();
            console.log(data);
            setErrorUn('');
            setnmModuloUn('');
            setShowModalDelete(false);
            toast.success(`Módulo  "${nmModuloUn}" desinstalado com sucesso!`);
        } catch (error) {
            console.error('Erro ao desinstalar o pacote:', error);
            setErrorUn('Erro ao desinstalar o módulo!');
        }
    };

    return (
        <>
            <div className="div-container-operador">
                <div className="intro-operador">
                    <h2>Área do operador</h2>
                </div>

                {showModalAdd && (
                    <div className="modal">
                        <div className="container-modal-modulo">
                            <div className="modal-header">
                                <h2>Adicionar Módulo</h2>
                                <button className="modal-modulo-fechar" onClick={() => setShowModalAdd(false)}><FaTimes /></button>
                            </div>
                            <div className="corpo-modal">
                                <input type="text"
                                    placeholder="Insira o nome do módulo"
                                    value={nmModuloIn}
                                    onChange={(e) => setnmModuloIn(e.target.value)}
                                />
                                {errorIn && <p className="modal-error">{errorIn}</p>}
                                <button className="modal-modulo-enviar" onClick={installPackage}>Instalar</button>
                            </div>
                        </div>
                    </div>
                )}

                {showModalDelete && (
                    <div className="modal">
                        <div className="container-modal-modulo">
                            <div className="modal-header">
                                <h2>Remover Módulo</h2>
                                <button className="modal-modulo-fechar" onClick={() => setShowModalDelete(false)}><FaTimes /></button>
                            </div>
                            <div className="corpo-modal">
                                <input type="text"
                                    placeholder="Insira o nome do módulo"
                                    value={nmModuloUn}
                                    onChange={(e) => setnmModuloUn(e.target.value)}
                                />
                                {errorUn && <p className="modal-error">{errorUn}</p>}
                                <button className="modal-modulo-enviar" onClick={uninstallPackage}>Desinstalar</button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="opcoes-operador">
                    <button className="opcao-card-operador"
                        onClick={() => setShowModalAdd(true)}>
                        <FaPlus />
                        <span>Adicionar módulo</span>
                    </button>

                    <button className="opcao-card-operador"
                        onClick={() => setShowModalDelete(true)}>
                        <FaTrash />
                        <span>Remover módulo</span>
                    </button>

                    <button className="opcao-card-operador">
                        <FaCalendarAlt />
                        <span>Inserir feriados municipais</span>
                    </button>

                    <button className="opcao-card-operador">
                        <FaPlus />
                        <span>Adicionar gestores de área</span>
                    </button>

                    <button className="opcao-card-operador">
                        <FaPlus />
                        <span>Adicionar membros de área</span>
                    </button>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Operador;