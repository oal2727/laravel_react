import React,{useEffect} from 'react'
import {Card} from 'react-bootstrap'
import {useParams} from "react-router-dom"
const ShowTask = () => {
    const {id} = useParams()
    return (  
        <>
            {/* <Card>
                <Card.Header>title task</Card.Header>
                <Card.Body>
                    <h1>description</h1>
                    <h1>time</h1>
                </Card.Body>
            </Card> */}
            <h1>task {id} </h1>
        </>
    );
}
 
export default ShowTask;