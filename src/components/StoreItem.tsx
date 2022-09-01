import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
 id: number
 name: string
 price: number
 imgUrl: string
}

export function StoreItem({id, name, price, imgUrl}:StoreItemProps) {
 const { 
  getItemQuantity, 
  increaseCartQuantity, 
  removeFromCart,
 } = useShoppingCart()
 const quantity = getItemQuantity(id)
 return (
 <Card className="h-100">
  <Card.Img variant="top" src={imgUrl} height="250px" style={{objectFit: "cover"}} />
  <Card.Body className="d-flex flex-column">
   <Card.Title className="d-flex flex-column justify-content-between align-items-baseline mb-1">
    <div className="fs-5 mb-3">{name}</div>
    <div className="fs-6 mb-1 text-muted">{formatCurrency(price)}</div>

   </Card.Title>
   <div className="mt-auto">
    <Button className="fs-6"> + Add to Cart</Button>
   </div>
   <Button variant="danger" size="sm">Remove</Button>
  </Card.Body>
 </Card>
 )
}