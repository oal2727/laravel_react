import React, { useContext,useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Task from '../../Api/task'
import {Table,Button,Spinner} from 'react-bootstrap'
// import {TaskProvider} from '../../Context/TasProvider'
import {TaskContext} from '../../Context/TaskContext'

const ListTask = () => {
    const {tasks,DeleteTask,EditTask} = useContext(TaskContext)

    let history = useHistory();
    const Show = (id)=>{
        history.push(`/show/${id}`)
    }
    const Delete =(item)=>{
        DeleteTask(item)
    }
    const Edit=(item)=>{
        EditTask(item)
    }
    return ( 
      <div style={{marginTop:15}}>
          {
              tasks.length < 1 ? 
             <div style={{textAlign:'center',margin:'auto',alignSelf:'center'}} >
                  <Spinner animation="border" role="status" >
              <span className="sr-only">Loading...</span>
              </Spinner>
                 </div>
              :
              <Table striped bordered hover style={{width:'50%',margin:'auto'}}>
              <thead>
                  <tr>
                  <th>N°</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th></th>
                  <th></th>
                  </tr>
              </thead>
              <tbody>
                  {
                      tasks.map((item,index) => (
                          <tr key={index}>
                          <td>{index+1}</td>
                          <td>{item.nombre}</td>
                          <td>{item.description}</td>
                          <td><Button  onClick={()=>Edit(item)} variant="warning">Edit</Button></td>
                          <td><Button onClick={()=>Delete(item.id)} variant="danger">Delete</Button></td>
                      </tr>
                      ))
                  }
              </tbody>
              </Table>
          }
         

            
      </div>
     );
}
 
export default ListTask;

     {/* <tr>
            <td>1</td>
            <td onClick={()=>Show(2)} href="#">laravel</td>
            <td>Loremp ipsum</td>
            <td><Button variant="warning">Edit</Button></td>
            <td><Button variant="danger">Delete</Button></td>
            </tr> */}