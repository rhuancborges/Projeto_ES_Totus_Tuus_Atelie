import React, {useState} from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom'
import useAuth from "../../hooks/auth"

function Login() {
    const [form, setForm] = useState({})
    const navigate = useNavigate()

    const { login } = useAuth();
  
    const handleLogin = async (event) => {
        event.preventDefault();
        login(form)
        navigate('/produto')
    }
  
    const handleChange = (event) => {
      setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <div className="paginaLogin">
            <div className="rightContainerLogin">
                <header className="headerLogin">
                    <img src={logo} alt="Totus Tuus Ateliê" />
                </header>
                <form>
                    <div className="inputContainerLogin">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" onChange={handleChange} name="name" id="usuario" placeholder="user123" />
                    </div>
                    <div className="inputContainerLogin">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" onChange={handleChange} name="password" id="senha" placeholder="Min. 8 caracteres" />
                    </div>
                    <button onClick={ handleLogin }>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
