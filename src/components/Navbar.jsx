import '../style/Navbar.css'
import UnderlineTabs from './underlineTabs'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="/zapatos.png" alt="Logo" className="navbar-logo" />
                <span className="navbar-title">Sneaker Vault</span>
            </div>
            

            <div className="navbar-right">
                <UnderlineTabs></UnderlineTabs>
            </div>
        </nav>
    );
}

export default Navbar