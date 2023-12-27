import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestReview from './RestReview';



function ViewRest() {


  const [restDetails,setRestDetails]=useState({})

  // const paraId = useParams()
  // console.log(paraId.id);

  //destructure
  const {id} = useParams()
  console.log(id);

  const base_url='https://restaurant-backend-8oyj.onrender.com/restaurants'

  const fetchRest=async()=>{
    const result =await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setRestDetails(result.data)
  }

  console.log(restDetails);

  useEffect(()=>{
    fetchRest()
  },[])

  return (
    <div>
      <Row>
        <Col >
        <img src={restDetails.photograph}  alt="" style={{width:'450px',height:'500px',margin:'40px'}} />
        </Col>
        <Col>
        <div className='container my-5 p-5' >
        <ListGroup as="ol">
          <h1 className='text-center' >{restDetails.name}</h1>
      
      <ListGroup.Item >Address : {restDetails.address}</ListGroup.Item>
      <ListGroup.Item >neighborhood : {restDetails.neighborhood}</ListGroup.Item>
      <ListGroup.Item >Cuisine type : {restDetails.cuisine_type}</ListGroup.Item>
      <ListGroup.Item ><RestOp op={restDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item ><RestReview review={restDetails.reviews} /></ListGroup.Item>
    </ListGroup>
        </div> 

        </Col>
      </Row>
    </div>
  )
}

export default ViewRest