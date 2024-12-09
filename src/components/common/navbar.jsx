import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartItemCount }) {
    return (
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/shop" >Shop</Link>
                <div>Cart: {cartItemCount}</div>
            </ul>
        </nav>
    );
}

export default Navbar;