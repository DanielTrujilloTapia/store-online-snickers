import '../style/Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="/zapatos.png" alt="Logo" className="navbar-logo" />
                <span className="navbar-title">Snickers</span>
            </div>
            <div className="navbar-right">
                <a className="navbar-link">Excluusivos</a>
                <a className="navbar-link">Nosotros</a>
                <a className="navbar-link">Contacto</a>
                <a className="navbar-link">Contacto</a>
            </div>
        </nav>
    );
}

export default Navbar