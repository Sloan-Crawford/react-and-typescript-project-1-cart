import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
 id: number
 quantity: number

}

export function CartItem({ id }: CartItemProps) {
 const { removeFromCart }: any = useShoppingCart()
 const item: any = storeItems.find(i => i.id === id)
 if (item === null) return null

 return (
  <Stack direction="horizontal" gap={3} className="d-flex align-items-center border-0 shadow-sm">
   <img 
   src={item.imgUrl} 
   style={{ width:"110px", objectFit:"cover"}}
   />
   <div className="me-auto">
    <div>
     {item.name} 
    </div>
    <div className="text-muted" style={{fontSize:".9rem"}}>
     {formatCurrency(item.price)}
     </div>
   </div>
     <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
  </Stack>
 )
}