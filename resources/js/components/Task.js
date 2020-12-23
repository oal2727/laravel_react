import React  from 'react'
import AddTask from './Task/AddTask'
import ListTask from './Task/ListTask'
import TaskContextProvider from '../Context/TaskContext'
const Task = () => {
    return (
        <div style={{marginTop:15}}>
          <TaskContextProvider>
              <AddTask/>
              <ListTask/>
          </TaskContextProvider>
          
        </div>
      );
}
 
export default Task;