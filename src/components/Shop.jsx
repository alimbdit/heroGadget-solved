import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utils/fakeDB';
import { useContext } from 'react';
import { CartContext, ProductContext } from '../App';

const Shop = () => {

    const products = useContext(ProductContext || []);
    const [cart, setCart] = useContext(CartContext || [])

    const handleAddToCart = (product) => {
        setCart([...cart, product])
        addToDb(product.id)
    }

    return (
        <div className='product-container'>

            {
                products.map(product => <ProductCard 
                    handleAddToCart={handleAddToCart} 
                    product={product} 
                    key={product.id}
                    ></ProductCard>)
            }
        </div>
    );
};

export default Shop;