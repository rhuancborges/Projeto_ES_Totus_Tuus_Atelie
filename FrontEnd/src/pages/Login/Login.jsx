import logo from '../../assets/logo.png'
import './Login.css'
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { Navigate } from "react-router-dom";

function Login() {
    // const [autenticado, setAutenticado] = useState(false);

    // const realizarLogin = () => {
    //     //validar usuario depois
    //     setAutenticado(true);
    // };

    return (
        <div className="containerLogin">
            <div className="rightContainerLogin">
                <header className="headerLogin">
                    <img src={logo} alt="Totus Tuus Ateliê" />
                </header>
                <form>
                    <div className="inputContainerLogin">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" name="usuario" id="usuario" placeholder="user123" />
                    </div>
                    <div className="inputContainerLogin">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Min. 8 caracteres" />
                    </div>
                    {/* <div>
                        <button onClick={realizarLogin}>
                            {props.text}
                        </button>
                        {autenticado && <Navigate to="/produto" />}
                    </div> */}
                    <button><Link to="/produto" style={{textDecoration: 'none', color: '#FFF'}}>Login</Link></button>
                </form>
            </div>
        </div>
    )
}

export default Login;
