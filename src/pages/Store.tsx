import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
 return (
 <div><h1>Store</h1>
 <Row md={2} xs={1} lg={3} // at medium width render 2 columns, xs=1 column, lg=3 columns / gap of 3
 className="g-3"> 
  {storeItems.map(item => (
   <Col key={item.id}>
    <StoreItem {...item} />
    </Col>
  ))}
 </Row>
 </div>
 )
}


