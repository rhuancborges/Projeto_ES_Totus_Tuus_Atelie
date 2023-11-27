import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
    return (<div>
        <div className="slogan">
            Mãos que Criam, Corações que Creem!
        </div>
        <div className="containerNav">
            <div className="dentroNav">
                <div className="logoNav">
                    <img src={logo} alt="Totus Tuus Atêlie" />
                </div>
                <ul className="botoesNav">
                    <li className="botaoNav">
                        <Link to="/produto">Produto</Link>
                    </li>
                    <li className="botaoNav">
                        <Link to="/cliente">Cliente</Link>
                    </li>
                    <li className="botaoNav">
                        <Link to="/pedido">Pedido</Link>
                    </li>
                    <li className="botaoNav">
                        <Link to="/venda">Venda</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Navbar;