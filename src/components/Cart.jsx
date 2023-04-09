import React, { useEffect, useState } from "react";
import { getStoredCart } from "../utils/fakeDB";
import { Link, useLoaderData } from "react-router-dom";
import CartItem from "./Cards/CartItem";
import { useContext } from "react";
import { CartContext, ProductContext } from "../App";

const Cart = () => {

  const [cart, setCart] = useContext(CartContext || [])

  const products = useContext(ProductContext || []);

  // console.log(products)

  const storedCart = getStoredCart();
  let total = 0;

  if (cart.length>0){
    for (const item of cart){
      total += (item.price * item.quantity) 
    }
  }


  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
    
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 ">
      <h2 className="text-xl font-semibold">
        {cart.length>0 ? "Review Cart Items" : "Cart is EMPTY!"}
      </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {cart.map((product) => (
            <CartItem key={product.id} product={product}></CartItem>
          ))}
        </ul>
        <div className='space-y-1 text-right'>
          <p>
            Total amount: <span className='font-semibold'>{total}$</span>
          </p>
          <p className='text-sm text-gray-400'>
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end">
          {
            cart.length > 0 
            ? (<>
            <button onClick={() => alert("cart Cleared")} className="btn-outlined">Clear <span className='sr-only sm:not-sr-only'>Cart</span></button>
            </>)
            : (<>
            <Link to='/shop'>
              <button className="btn-outlined">Back <span className='sr-only sm:not-sr-only'>To Shop</span></button>
            </Link> 
            </>)
          }
          
          <Link to=''>
            <button onClick={() => alert("order placed")} className="btn-primary">Place Order</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
