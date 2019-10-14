import React, { Component } from 'react'
import { connect } from 'react-redux'
import {changePage} from '../../ducks/reducer'

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
        this.props.changePage({page: '/dashboard', nav: 'nav'})
        
    }
    render() {
        return (
            <div className='auth'>
                <input onChange={this.handleUserName}/>
                <input onChange={this.handlePassword}/>
                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    page: reduxState.reducer.page
})

const mapDispatchToProps = {
    changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

