
import React from 'react'
import { Card,Button } from 'react-bootstrap'

const Items = (props) => {
    const {itemArray} =props;
    return (
        <div className="heni">   
  {
      itemArray.map(
          (el)=>(
<Card className="card">
    <Card.Img variant="top" src={el.imageSrc} style={{width :"150px" , height:"120px"}}/>
    <Card.Body>
      <Card.Title>{el.name}</Card.Title>
      <Card.Text>
        {el.price}
      </Card.Text>
    </Card.Body>
    
    <Button variant="dark" onClick={()=> alert(`    Product Name: ${el.name}
    Product Price: ${el.price}`)}   >Alert info</Button>{' '}

    
  </Card>
          )
      )
  }
        </div>
    )
}

export default Items
