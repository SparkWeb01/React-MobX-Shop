import React from 'react'
import {Container, Image, Row, Col, Card, Button} from "react-bootstrap";
import star from '../assets/star.png'
const DevicePage = () => {
    const device = {id: 1 , name: 'Iphone 12 pro max', price: 24990 , rating: 5, img: 'https://cdn.citilink.ru/-NT6ItIRLfxLmd7h3FXzkHBcEWXeZPZN-m1IhL9i3Ro/resizing_type:fit/gravity:sm/width:1200/height:1200/plain/items/1912377_v01_b.jpg'}
    const description = [
      {id: 1 , title: 'Оперативная память', description: '5 гб'},
      {id: 1 , title: 'Камера', description: '12 мп'},
      {id: 1 , title: 'Процессор', description: 'M1'},
      {id: 1 , title: 'К-во ядер', description: '2'},
      {id: 1 , title: 'Аккамулятор', description: '4000'},
    ]
    return (
    <Container className='mt-5'>
      <Row>
      <Col md={4}>
            <Image width={250} height={300} src={device.img}/>
        </Col>
        <Col md={4}>      
            <h2 className='ml-2'>{device.name}</h2>
            <Row>
              <Col className='d-flex align-items-center justify-content-end'>
              <div>{device.rating}</div>
              </Col>
              <Col className='d-flex align-items-center justify-content-start'>
              <Image width='18px' height='18px' src={star}/>
              <Image width='18px' height='18px' src={star}/>
              <Image width='18px' height='18px' src={star}/>
              <Image width='18px' height='18px' src={star}/>
              <Image width='18px' height='18px' src={star}/>
              </Col>
            </Row>         
        </Col>
        <Col md={4}>
          <Card
          style={{width:'300px', height:'300px', border:'none'}}
          className='d-flex flex-colimn align-items-center justify-content-around'
          >
            <h3> От {device.price} руб.</h3>
            <Button>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h2>Характеристики:</h2>
        {description.map((info,index)=>
          <Row key={info.id} style={{background: index % 2 === 0 ?'lightgray':'transparent'}}> 
            {info.title}: {info.description}
          </Row>  
        )}
      </Row>
    </Container>
  )
}

export default DevicePage