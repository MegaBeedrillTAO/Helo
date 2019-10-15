import React, { Component } from 'react'
import { connect } from 'react-redux'
import {changePage} from '../../ducks/reducer'
import {registerUser, loginUser} from '../../ducks/authReducer'


export class Auth extends Component {

    constructor(){
        super();
        this.state ={
            username: '',
            password: ''
        }
    }
    handleUserName = (e) => {
        this.setState({username: e.target.value})
    }
    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }

    handleLogin = () => {
        const {username, password} = this.state;
        this.props.loginUser({username, password})
        if(this.props.id !== null){
            this.props.changePage({page: '/dashboard', nav: 'nav'})
        }
        
    }
    handleRegister = () => {
        const {username, password} = this.state;
        let profile = `https://robohash.org/${username}`
        this.props.registerUser({username, password, profile})
        if(this.props.id !== null){
            this.props.changePage({page: '/dashboard', nav: 'nav'})
        }
    }
    render() {
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
    id: reduxState.authReducer.user_id
})

const mapDispatchToProps = {
    changePage,
    loginUser,
    registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

