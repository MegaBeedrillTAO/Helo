import {Route, Switch} from 'react-router-dom';
import React from 'react'; 
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Post from './Components/Post/Post';
import Form from './Components/Form/Form';

export default (
    <Switch>
        <Route component={Auth} exact path='/'/>
        <Route component={Dashboard}  path='/dashboard'/>
        <Route component={Post} path='/post/:postid'/>
        <Route component={Form}  path='/new'/>
    </Switch>
)