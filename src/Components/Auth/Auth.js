import React, { Component } from 'react'
import { connect } from 'react-redux'
import {changePage} from '../../ducks/reducer'
import {registerUser, loginUser, getUser} from '../../ducks/authReducer'


export class Auth extends Component {

    constructor(){
        super();
        this.state ={
            username: '',
            password: '',
            profile: ''
        }
    }
    componentDidMount(){
        this.props.getUser();
    }
    handleUserName = (e) => {
        this.setState({username: e.target.value, profile: `https://robohash.org/${e.target.value}`})
    }
    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }

    handleLogin = () => {
        const {username, password} = this.state;
        this.props.loginUser({username, password})
        
        
    }
    handleRegister = () => {
        const {username, password, profile} = this.state;
       
        this.props.registerUser({username, password, profile})
       
    }
    render() {
        
        if(this.props.id !== null && this.props.redirect === true){
            this.props.changePage({page: '/dashboard', nav: 'nav'})
        }
        return (
            <div className='auth'>
                <input onChange={this.handleUserName}/>
                <input onChange={this.handlePassword}/>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleRegister}>Register</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    page: reduxState.reducer.page,
    id: reduxState.authReducer.user_id,
    redirect: reduxState.authReducer.redirect
})

const mapDispatchToProps = {
    changePage,
    loginUser,
    registerUser,
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

