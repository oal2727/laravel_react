import React, { useState,useEffect, createContext,useReducer } from 'react'
import Task from '../Api/task'
import {TaskReducer} from '../components/Reducers/TaskReducer'

export const TaskContext = createContext()

const TaskContextProvider = (props) => {

    const [tasks, setTasks] = React.useState([]);
    const [task,setTask] = useState({id:'',nombre:'',description:''})

    useEffect(() => {
    Task.getTask().then(res => {
        setTasks(res.data)
       return
    })
    }, [])


    // const initialState = {
        
    //     todo:
    // }
    // const [state,dispatch] = useReducer(TaskReducer,initialState)
    const AddTask = (data)=>
    {
        const param={
            nombre:data.nombre,
            description:data.description
        }
        Task.addTask(param).then(e =>{
            setTasks([
                ...tasks,{id:e.data.data.id,nombre:data.nombre,description:data.description}
            ])
            Cancelar();
        }).catch(err =>{
            console.log(err)
        })

    }
    const DeleteTask = (id)=>{
        Task.DeleteTask(id).then(e =>{
            console.log("delet e...")
            let newData = tasks.filter(data =>{
                return data.id !== id
            })
            setTasks(newData)
        })
      
    }
    const EditTask =(item)=>{
        setTask({nombre:item.nombre,description:item.description,id:item.id})
    }
    const Cancelar =()=>{
        setTask({nombre:'',description:'',id:''})
    }
    const UpdateTask =(item)=>{
        Task.UpdateTask(item).then(e =>{
            const newData = tasks.map(data =>{
                return data.id === item.id ? item : data
            })
            setTasks(newData)
          Cancelar()
        })
    
      
        
    }

    return ( 
        <TaskContext.Provider value={{tasks,task,AddTask,DeleteTask,EditTask,Cancelar,UpdateTask}}>
            {props.children}
        </TaskContext.Provider>
     );
}
 
export default TaskContextProvider;