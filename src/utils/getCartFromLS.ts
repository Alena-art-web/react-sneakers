import { CartItem } from "../redux/slices/cart"

export const calcTotalPrice = (items: CartItem[]) => {
    return items.reduce((sum, obj) => {
        return obj.price  + sum
    }, 0)
} 

export const getCartfromLS = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) : []
    console.log(items);
    
    const totalPrice = calcTotalPrice(items)

    return {
        items,
        totalPrice
    }
}

