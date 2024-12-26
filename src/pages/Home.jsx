import React from "react";
import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Welcome to our store</h1>
                <p>Discover amazing products at great prices</p>
            </div>
            <div className={styles.features}>
                <div className={styles.feature}>
                    <img src="https://picsum.photos/300/200?1" alt="Free shipping" className={styles.featureImage} />
                    <h2>Free Shipping</h2>
                    <p>On orders over $50</p>
                </div>

                <div className={styles.feature}>
                    <img src="https://picsum.photos/300/200?2" alt="Quality Products" className={styles.featureImage} />
                    <p>Curated selection of the best items</p>
                </div>

                <div className={styles.feature}>
                    <img src="https://picsum.photos/300/200?3" alt="24/7 Support" className={styles.featureImage} />
                    <h2>24/7 Support</h2>
                     <p>Were here to help anytime</p>
                </div>    
            </div>
        </div>
    )
} 

export default Home;