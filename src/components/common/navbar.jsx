import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

function Navbar({ cartItemCount }) {
    return (
        <nav className={styles.navbar}>
           <div className={styles.navLinks}> 
                <Link to="/" className={styles.link}>Home</Link>
                <Link to="/shop" className={styles.link}>Shop</Link>
                <div className={styles.cartInfo}>
                    <span> Cart: {cartItemCount}</span>

                    </div>
            </div>
        </nav>
    );
}

export default Navbar;