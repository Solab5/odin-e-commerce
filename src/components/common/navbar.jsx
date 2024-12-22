import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

function Navbar({ cartItemCount }) {
    return (
        <div className={styles.navContainer}>
            <div className={styles.logo}>MY STORE </div>
            <nav className={styles.navbar}>
            <div className={styles.navLinks}> 
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/shop" className={styles.link}>Shop</Link>
                    <div className={styles.cartInfo}>
                        <span> Cart: {cartItemCount}</span>
                        <Link to="/cart" className={styles.checkoutButton}>Checkout</Link>
                    </div>
                </div>
        </nav>
        </div>
    );
}

export default Navbar;