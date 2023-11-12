import logo from "../../assets/logo.png";
import "./Login.css";

function Login() {
    return <div className="rightContainer">
        <header className="header">
            <img src={logo} alt="Totus Tuus Ateliê" />
        </header>
        <form>
            <div className="inputContainer">
                <label htmlFor="usuario">Usuário</label>
                <input type="text" name="usuario" id="usuario" placeholder="user123" />
            </div>
            <div className="inputContainer">
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="senha" placeholder="Min. 8 caracteres" />
            </div>
            <button className="button">Login</button>
        </form>
    </div>
}

export default Login;