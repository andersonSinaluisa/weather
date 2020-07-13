import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Form from './Components/form';


function Main(){

    return(
            <BrowserRouter>
            <Route exact path="/clima" component={Form}/>
            <Route exact path="astro" />
            </BrowserRouter>
    )
}

export default Main;