import React,{createContext,useState,useEffect} from 'react'
import sanityClient from "./sanityClient"


const CartContext = createContext()

const CartProvider = ({children}) => {

    const localCartState =  localStorage.getItem('cartState')
    
    const defaultCartState = {
        number_of_items:0,
        products_in_cart:[],
        sub_total:0,
        user:{
            uid:"",
            isLoggedIn:false
        }
    }

    const [cartState,setCartState] = useState(JSON.parse(localCartState) ? JSON.parse(localCartState) : defaultCartState)

    useEffect(()=> {

        localStorage.setItem('cartState',JSON.stringify(cartState))
    },[cartState])

    const logInUser = (uid) => {
        setCartState({
            ...cartState,
            user:{
                uid:uid,
                isLoggedIn:true
            }
        })
    }

    const logOutUser = () => {
        setCartState({
            ...cartState,
            user:{
                uid:"",
                isLoggedIn:false
            }
        })
    }

    const add_to_cart = (id) => {
        if (cartState.products_in_cart < 1 ) {
            sanityClient
                .fetch(
                    `*[_type == 'product' && _id == "${id}" ]{   
                title,
                img,
                new_price,
                _id
            }`)
                .then(resp => {
                   setCartState(
                        {
            ...cartState,
             number_of_items:cartState.number_of_items + 1,

            products_in_cart:[{...resp[0],quantity:1
                    },...cartState.products_in_cart],

                    sub_total:cartState.sub_total + Number(resp[0].new_price)
                }) 
                
                }) 
                .catch(error => {
                    throw error
                })
        }
        else {
            const is_product_in_cart = cartState.products_in_cart.filter(product => product._id === id)
            
            if (is_product_in_cart.length < 1 ) {
                sanityClient
                    .fetch(
                        `*[_type == 'product' && _id == "${id}" ]{   
                            title,
                            img,
                            _id,
                            new_price
                        }`)

                    .then(resp => {
                        setCartState({
                            ...cartState,
                            number_of_items: cartState.number_of_items + 1,
                            products_in_cart: [{ ...resp[0], quantity: 1 }, ...cartState.products_in_cart],
                            sub_total: cartState.sub_total + Number(resp[0].new_price)
                        })

                    })
                    .catch(error => {
                        throw error
                    })
            }
            }
    } 
    const increase_quantity = (quantity,id) => {
        let products = cartState.products_in_cart 
        let product = products.filter(prod => prod._id === id)
        const index = products.findIndex(prod => prod._id === id)
        product = {
            ...products[index],
            quantity:quantity
        }

        products[index] = product
}


    const increase_sub_total = (price,id) => {
        setCartState({
            ...cartState,
            sub_total:cartState.sub_total + Number(price)
        })
        
    }

    const decrease_sub_total = (price) => {
        setCartState({
            ...cartState,
            sub_total:cartState.sub_total - Number(price)
        })
        
    }

    const remove_product_from_cart = (id,price,quantity) => {
        setCartState({
            ...cartState,
            products_in_cart:cartState.products_in_cart.filter(product => product._id !== id),
            sub_total:cartState.sub_total - (price * quantity),
            number_of_items:cartState.number_of_items - 1
        })
        
    }
    const resetCart =() => {
    setCartState( {
        number_of_items:0,
        products_in_cart:[],
        sub_total:0,
    })
    }
    
    



    return (
        <CartContext.Provider value={
            {
                number_of_items:cartState.number_of_items,
                add_to_cart:add_to_cart,
                products_in_cart : cartState.products_in_cart,
                sub_total:cartState.sub_total,
                increase_sub_total:increase_sub_total,
                decrease_sub_total:decrease_sub_total,
                remove_product_from_cart:remove_product_from_cart,
                increase_quantity:increase_quantity,
                resetCart:resetCart,
                user:cartState.user,
                logInUser:logInUser,
                logOutUser:logOutUser

            }
        }
        >
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider}