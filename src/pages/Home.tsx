import { Container } from "react-bootstrap"
import  HomeCarousel  from "../components/HomeCarousel"




export function Home() {
 return (
 <div className="mt-4">
  <Container className="d-flex justify-content-between align-items-center mb-2">
  <h1 style={{fontSize:"3rem", color:"Hotpink"}} > Michelle Marin</h1>
  <img src="/public/images/instagram.svg" alt="instagram logo" />
  </Container>
  <HomeCarousel/>
  
 
 </div>
 )
}