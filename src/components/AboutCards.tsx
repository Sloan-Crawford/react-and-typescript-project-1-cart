import { Card, Button } from 'react-bootstrap';


export function AboutCards() {
  return (
   <div>
    <div className="d-flex flex-column justify-content-center">
     <Card  className="d-flex align-items-center shadow-lg mb-3 m-3 bg-light border-0"> 
      <Card.Img className="d-flex align-items-center p-3 w-75 mt-2" variant="top" src="images/MichelleProfile.jpeg" />
      <Card.Body>
        <Card.Title className='fs-2 d-flex justify-content-center mb-4'>My Story</Card.Title>
        <Card.Text className='bg-white m-2 mb-3 p-4' style={{ lineHeight: 'calc(20px + 0.5625vw)', fontSize:"calc(14px + 0.300625vw)", maxHeight:"calc(150px + 30vh", overflowY:"auto", textAlign:"justify"}}>
           Costa Rican born and raised, I now live in Canada and am based in Toronto. I am drawn to working with  yarn, thread, fabric, clay and paint because these materials are comforting to me. The canvas is a safe place for me to play with and explore traditional craft and painting techniques in a contemporary manner. I create paintings that explore mark making one stitch or one brushstroke at a time. Self taught as a painter and formally educated in Material Arts at OCAD University and Gerontology at George Brown College, I draw on my technical knowledge as a craftsperson and artist, as well as my experiences and observations as a healthcare worker, to explore what it means to be human. 
        </Card.Text>
        <Card.Link target="#" href="https://www.instagram.com/michellemarinstudio/" className='d-flex align-items-center justify-content-center' 
        style={{  
         fontSize:"calc(15px + 0.320625vw)",
         textDecoration: 'none', 
         color:"#17a2b8"}}>
          <img height="25rem" src="/images/instagram.svg" alt="instagram logo" className='me-2'/> See my Instagram
          </Card.Link>
      </Card.Body>
     </Card>
     <Card  className="d-flex align-items-center shadow-lg mb-3 m-3 bg-light border-0"> 
      <Card.Img className="d-flex align-items-center p-3 w-75 mt-2" variant="top" src="images/ReachingOut.jpeg" />
      <Card.Body>
        <Card.Title className='fs-2 d-flex justify-content-center mb-4'>My Work</Card.Title>
        <Card.Text className='bg-white m-2 mb-3 p-4' style={{ lineHeight: 'calc(20px + 0.5625vw)', fontSize:"calc(14px + 0.300625vw)", maxHeight:"calc(150px + 30vh", overflowY:"auto", textAlign:"justify"}}>
           I create portraits, still lifes and landscapes on linen canvases using traditional craft and painting techniques with a playful, exploratory and curious attitude. I am intrigued by contrasting colours, art and craft materials and fine art painting genres. I enjoy exploring  new ways of layering yarn, fabric, clay and paint on the same surface. Working with mixed media presents technical challenges in my process that parallel the emotional  challenges I face as a healthcare worker. I know the work is complete when I feel lighthearted and the colours and materials sing in harmony. My emotionally cathartic and technically complex process supports me in creating unique and inviting embroidery paintings that are comforting and intimate. My work is constantly growing and evolving and I am always trying to push what is possible with textiles, ceramics and paint. Endless combinations fill my imagination and lead to endless play in my art studio.
        </Card.Text>
        <Card.Link target="#" href="https://www.instagram.com/michellemarinstudio/" className='fs-4 d-flex align-items-center justify-content-center' 
        style={{ 

         fontSize:"calc(15px + 0.320625vw)",
         textDecoration: 'none', 
         color:"#17a2b8"}}>
          <img height="25rem" src="/images/instagram.svg" alt="instagram logo" className='me-2'/> See my Instagram
          </Card.Link>
      </Card.Body>
     </Card>
     <Card  className="d-flex align-items-center shadow-lg mb-3 m-3 bg-light border-0"> 
      <Card.Img className="d-flex align-items-center p-3 w-75 mt-2" variant="top" src="images/MichelleStudio.jpeg" />
      <Card.Body>
        <Card.Title className='fs-2 d-flex justify-content-center mb-4'>My Studio</Card.Title>
        <Card.Text className='bg-white m-2 mb-3 p-4' style={{ lineHeight: 'calc(20px + 0.5625vw)', fontSize:"calc(14px + 0.300625vw)", maxHeight:"calc(150px + 30vh", overflowY:"auto", textAlign:"justify"}}>
           I create embroidery paintings in my quiet home studio in the beaches neighbourhood in Toronto. My studio contains books on gerontology and art, a sea glass that collection captures sunlight and a baseball signed with endearing messages by an older adult living in a long term care home to remind me of my community. I surround myself with large stashes of art and craft supplies so that I am ready to play when inspiration strikes. I often have a fantasy audiobook playing in the background to keep my adventurous energy flowing, or an uplifting album playing on my record player to set the mood. I jump from music genre to music genre, providing the fuel my inner child and creative self are yearning for. My studio is a sacred and safe space for me to relax, reflect and heal. The results of this act of self care are contemporary embroidery paintings that are colourful and comforting.
        </Card.Text>
        <Card.Link target="#" href="https://www.instagram.com/michellemarinstudio/" className='fs-4 d-flex align-items-center justify-content-center' 
        style={{ 
         fontSize:"calc(15px + 0.320625vw)",
         textDecoration: 'none', 
         color:"#17a2b8"}}>
          <img height="25rem" src="/images/instagram.svg" alt="instagram logo" className='me-2'/> See my Instagram
          </Card.Link>
      </Card.Body>
     </Card>
    </div>
    </div>
  );
}
