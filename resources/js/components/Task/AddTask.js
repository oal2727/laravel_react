import React,{useContext} from 'react'
import {Card,Form,Button} from 'react-bootstrap'
import {Formik} from 'formik'
import {TaskContext} from '../../Context/TaskContext';
const AddTask = (props) => {
    const {AddTask,task,Cancelar,UpdateTask} = useContext(TaskContext)
    const button=()=>{
        console.log("press")
    }
    return (
        <div style={{marginTop:20}}>
            <Card style={{width:'50%',margin:'auto'}}>
                <Card.Header style={{textAlign:'center',color:'blue'}} >
                   {
                       task.id === "" ?
                       <h1 variant="primary" >Add Task</h1>
                       :
                       <h1 variant="warning">Update Task</h1>
                   }
                </Card.Header>
                <Card.Body>
               <Formik
               initialValues={task}
               enableReinitialize
               onSubmit={(values)=>{
                   if(values.id === ""){
                    AddTask(values)
                   }else{
                    UpdateTask(values)
                   }
               }}
               >{
                   (props) => (
               <Form >
                       <Form.Group>
                            <Form.Control type="text" placeholder="Name task" 
                            value={props.values.nombre} onChange={props.handleChange('nombre')}></Form.Control>
                       </Form.Group>
                       <Form.Group>
                       <Form.Control placeholder="Description here" as="textarea" 
                       value={props.values.description} onChange={props.handleChange('description')} rows="3" />
                       </Form.Group>
                      {
                          task.id === '' ?
                          <Button onClick={props.handleSubmit} type="submit" variant="primary">Add Task</Button>
                          :
                         <div>
                              <Button onClick={props.handleSubmit} type="submit" variant="success">Update Task</Button>
                              <Button type="submit" onClick={()=>Cancelar()} variant="danger">Cancel</Button>
                         </div>
                      }
                   </Form>
                   )
                        }
               </Formik>
                </Card.Body>    
            </Card>
        </div>
      );
}
 
export default AddTask;