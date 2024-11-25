import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="/logo.png" alt="Logo" className="navbar-logo" />
                <span className="navbar-title">Mi Página</span>
            </div>
            <div className="navbar-right">
                <a href="#nosotros" className="navbar-link">Nosotros</a>
                <a href="#productos" className="navbar-link">Productos</a>
                <a href="#contacto" className="navbar-link">Contacto</a>
            </div>
        </nav>
    );
}

export default Navbar