import React from 'react';
import ReactDOM from 'react-dom';
import NavbarCompomponent from './Menu/Navbar'
import {  BrowserRouter as Router,Switch,Route,useParams } from "react-router-dom";
import Dashboard from './components/Dashboard'
import Task from './components/Task'
import ShowTask from './components/Task/ShowTask'
function Main() {
    // const Show = ()=>{
    //     let {id} = useParams()
    //     return <div>here param {id}</div>
    // }
    return (
        <div className="container">
            <Router>
            <NavbarCompomponent/>
            <Switch>
                <Route path="/" exact>
                    <Dashboard/>
                </Route>
                <Route path="/task">
                    <Task/>
                </Route>
                <Route path="/show/:id">
                    <ShowTask/>
                </Route>
            </Switch>
            </Router>
        </div>
    );
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
