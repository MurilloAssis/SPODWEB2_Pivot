import '../../assets/css/style.css'
import '../../assets/css/consultasAdm.css'
import '../../assets/css/login.css';
import logo from "../../assets/img/logo_spmedgroup_v1 1.png"
import { Link } from 'react-router-dom';

export default function header (){
        return (
            <header>
                <div className="container container_header">
                    <img className="logo" src={logo} alt="Logo SP Medical" />
                    <div className="space_left">
                        <nav className="links_uteis">
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/consultas">Consultas</Link>
                            <Link to="/equipe">Equipe</Link>
                            <Link to="/contato">Contate-nos</Link>              
                  </nav>
                        
                    </div>
                </div>
            </header>
        )
}