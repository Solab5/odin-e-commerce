import React, {useState, useEffect} from "react";
import { useOutletContext } from "react-router-dom";
import styles from './Shop.module.css'
    
function Shop() {
    const { addToCart } = useOutletContext();
    const [loading, setLoading] = useState(true); 
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const productsWithQuantity = data.map(product => ({
          ...product, quantity: 0
        }));
        setProducts(productsWithQuantity);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError(error);
        setLoading(false);
      });
    }, []);

    if (loading) {
      return <div>Loading products...</div>
    }

    if (error) {
      return <div>Error loading products: {error.message}</div>;
    }
    return (
        <div className={styles.container}>
            <h2 > Check out our products ... </h2>
            <div className={styles.productsGrid}>
              {products.map(product => (
                  <div 
                  key={product.id}
                  className={styles.productCard}
                  > 
                  <img
                  src={product.image}
                  alt={product.title}
                  className={styles.productImage}
                  />
                      <h3>{product.title}</h3>
                      <p>${product.price}</p>
                      <button onClick={() => addToCart(product)}>Add product</button>
                  </div>
              ))}
            </div>
        </div>
    )
}

export default Shop;
