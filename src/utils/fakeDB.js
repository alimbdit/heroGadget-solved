// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = { };

    //get the shopping cart from local storage
    const savedCart = localStorage.getItem('shopping-cart');
    if(savedCart){
        shoppingCart = JSON.parse(savedCart);

        // add quantity
        let quantity = shoppingCart[id];
        if(quantity){
            quantity++;
            shoppingCart[id] = quantity;
        }
        else{
            shoppingCart[id]=1;
        }
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}


const getStoredCart = () => {
    
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    return shoppingCart;
}

export {
    addToDb,
    getStoredCart,
}