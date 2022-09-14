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
 }: any = useShoppingCart()
 const quantity = getItemQuantity(id)

 return (
 <Card className="h-100">
  <Card.Img variant="top" src={imgUrl} height="250px" style={{objectFit: "cover"}} />
  <Card.Body className="d-flex flex-column">
   <Card.Title className="d-flex flex-column justify-content-between align-items-baseline mb-1">
    <div className="fs-5 mb-2">{name}</div>
    <div className="d-flex align-items-center">
     <div className="fs-6 mb-1 text-muted me-3">{formatCurrency(price)}</div>
   <div>
    {quantity === 0 ? (
     <Button className="fs-7 me-2" size="sm" variant="info" onClick={() => increaseCartQuantity(id)}> + Add to Cart</Button>) : (
      <Button className="fs-7 me-2" size="sm" onClick={() => removeFromCart(id)} variant="danger">- Remove</Button> )}
   </div>
   </div>
      </Card.Title>
   
  </Card.Body>
 </Card>
 )
}