import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './Cart.module.css';


function Cart() {
    const { cartItems } = useOutletContext();

    const total = cartItems.reduce((sum, item) => 
        sum + (item.price * item.quantity), 0);

    return (
        <div className={styles.container}>
            <h2>Here is your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your Cart is empty</p>
            ): (
                <>
                {cartItems.map(item => (
                    <div key={item.id} className={styles.cartItem}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className={styles.itemImage}
                        />
                        <div className={styles.itemInfo}>
                            <h3>{item.title}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price}</p>
                        </div>
                    </div>
                ))}
                <div className={styles.total}>
                    <h3>Total: ${total.toFixed(2)}</h3>
                    <button
                        className={styles.checkoutButton}
                        onClick={() => alert('Check out not implemented yet')}
                    >
                        Proceed to Checkout
                    </button>
                </div>
                </>
            )}
        </div>
    );
}

export default Cart;