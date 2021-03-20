import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Navigation from './components/Navigation'


function App () {
    return (
        <>
            <Navigation/>
            <div className="route-wrapper">
                <Switch>                  
                    <Route exact path='/' component={Home}/> 
                    <Route path='/projects' component={Projects}/>             
                </Switch>
            </div>
        </>
    )
}

export default App
