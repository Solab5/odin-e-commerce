import React, {useState, useEffect} from "react";
import { useOutletContext } from "react-router-dom";
import styles from './Shop.module.css'
    
function Shop() {
    const { addToCart } = useOutletContext();
    const [loading, setLoading] = useState(true); 
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [quantities, setQuantities] = useState({})

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        const initialQuantities = {};
        data.forEach(product => {
          initialQuantities[product.id] = 1;
        });
        setQuantities(initialQuantities);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error);
        setLoading(false);
      });
    }, []);

    const handleQuantityChange = (productId, value) => {
      const newValue = Math.max(1, parseInt(value) || 1);
      setQuantities(prev => ({
        ...prev, 
        [productId]: newValue
      }));
    };

    const incrementQuantity = (productId) => {
      setQuantities(prev => ({
        ...prev,
        [productId]: prev[productId] + 1
      }));
    };

    const decrementQuantity = (productId) => {
      setQuantities(prev => ({
        ...prev,
        [productId]: Math.max(1, prev[productId] - 1)
      }));
    };

    const handleAddToCart = (product) => {
      const quantity = quantities[product.id];
      addToCart({...product, quantity });
    }

    if (loading) {
      return <div>Loading products...</div>
    }

    if (error) {
      return <div>Error loading products: {error.message}</div>;
    }
    return (
        <div className={styles.container}>
            <h2 > Our products </h2>
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
                      <h3 className={styles.productTitle}>{product.title}</h3>
                      <p className={styles.productPrice}>${product.price}</p>
                      <div className={styles.quantityControl}>
                        <button 
                        onClick={() => decrementQuantity(product.id)}
                        className={styles.quantityButton}
                        > - 
                        </button>
                        <input 
                        type="number" 
                        min="1"
                        value={quantities[product.id]}
                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                        className={styles.quantityInput}
                        />
                        <button 
                        onClick={() => incrementQuantity(product.id)}
                        className={styles.quantityButton}
                        > + 
                        </button>
      
                      </div>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className={styles.addToCartButton}
                        > Add to Cart 
                        </button>
                  </div>
              ))}
            </div>
        </div>
    )
}

export default Shop;
