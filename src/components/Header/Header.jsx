import { Link, useLocation } from "react-router-dom";
import {useCart} from "../../context/CartContext.jsx";


function Header() {
    const { cartCount } = useCart();
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <header>
            <Link to="/">Mobile Shop</Link>
            <nav>
                {isHome? (
                        <span>Inicio</span>
                    ) : (
                        <span>
                            <Link to="/">Inicio</Link> / Detalle
                        </span>
                    )}
            </nav>
            <span>Carrito ({cartCount})</span>
        </header>
    )
}

export default Header;