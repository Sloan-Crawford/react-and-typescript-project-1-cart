import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
 children: ReactNode //the type that I give to the children property inside of React
}

type CartItem = {
 id: number
 quantity: number
}

type ShoppingCartContext = {
 getCartQuantity: (id:number) => number
 increaseCartQuantity: (id:number) => void
 removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({})

// get context:
export function useShoppingCart() {
 return useContext(ShoppingCartContext)
}

// implement provider portion (gives all values, render out shopping cart):
// (note: providers always need to have objects and children inside of them)
export function ShoppingCartProvider( { children }: ShoppingCartProviderProps) {
 const [cartItems, setCartItems] = useState<CartItem[]>([])

function getItemQuantity(id: number) {
 return cartItems.find(item => item.id === id)?.quantity || 0
}

function increaseCartQuantity(id: number) {
 setCartItems(currItems => {
  if (currItems.find(item => item.id === id) == null) {
   return [...currItems, {id, quantity: 1 }]
  } else {
   return currItems.map(item => {
    if (item.id === id) {
     return {...item, quantity: item.quantity + 1 }
    } else {
     return item
    }
   })
  }
 })
}

function removeFromCart (id: number) {
 setCartItems(currItems => {
  return currItems.filter(item => item.id !== id)
 })
}

 return (
 <ShoppingCartContext.Provider value={({getItemQuantity, increaseCartQuantity, removeFromCart})}>
  {children}
  </ShoppingCartContext.Provider>
  )
}