import { Link } from "react-router-dom";

import styles from './Navbar.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to="/home">Home</Link>
            <Link to="/contact">Contatos</Link>
        </nav>
    );
};

export default Navbar;