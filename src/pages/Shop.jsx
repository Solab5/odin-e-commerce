import React, {useState, useEffect} from "react";
import { useOutletContext } from "react-router-dom";

const PRODUCTS = [
    {
      id: 1,
      title: 'Laptop',
      price: 999.99,
      description: 'A powerful laptop for work and play',
      quantity: 0
    },
    {
      id: 2,
      title: 'Smartphone',
      price: 599.99,
      description: 'Latest model smartphone',
      quantity: 0
    },
    {
      id: 3,
      title: 'Headphones',
      price: 199.99,
      description: 'Noise-cancelling wireless headphones',
      quantity: 0
    }
  ];

function Shop() {
    const { addToCart } = useOutletContext();
    const [products, setProducts] = useState(PRODUCTS);

    return (
        <div>
            <h2>Our Products</h2>
            {products.map(product => (
                <div key={product.id}> 
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                    <button onClick={() => addToCart(product)}>Add product</button>
                </div>
            ))}
        </div>
    )
}

export default Shop;
