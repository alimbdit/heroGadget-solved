import { getStoredCart } from "../utils/fakeDB";

const productsAndCartData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const storedCart = getStoredCart();

  const initialCart = [];

  for (const id in storedCart) {
    const product = products.find((pd) => pd.id === id);
    if (product) {
      product.quantity = storedCart[id];
      initialCart.push(product);
      
    }
  }

  return {initialCart, products}
};

export { productsAndCartData };
