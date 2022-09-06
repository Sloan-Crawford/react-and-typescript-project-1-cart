import { Offcanvas, Stack } from "react-bootstrap"; // slides in from side
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json"


type ShoppingCartProps = {
 isOpen: boolean
}


export function ShoppingCart({ isOpen }: ShoppingCartProps) {
 const { closeCart, cartItems }: any = useShoppingCart()
 return (
 <Offcanvas show={isOpen} onHide={closeCart} placement="end">
  <Offcanvas.Header closeButton>
   <Offcanvas.Title>Cart</Offcanvas.Title>
   </Offcanvas.Header>
   <Offcanvas.Body>
    <Stack gap={3}>
     {cartItems.map(item => (
     <CartItem key={item.id} {...item} />
     ))}
     <div className="ms-auto fw-bold fs-6">
      Total {formatCurrency(cartItems.reduce((total, cartItem) => {
       const item = storeItems.find(i => i.id === cartItem.id)
       return total + (item?.price || 0)
      }, 0)
      )}
     </div>
    </Stack>
   </Offcanvas.Body>
 </Offcanvas>
 )
}