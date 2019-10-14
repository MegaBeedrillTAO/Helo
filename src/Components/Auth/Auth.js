import React, { Component } from 'react'
import { connect } from 'react-redux'
import {changePage} from '../../ducks/reducer'

export class Auth extends Component {

    handleClick = () => {
        this.props.changePage({page: '/dashboard', nav: 'nav'})
        
    }
    render() {
        return (
            <div className='auth'>
                <button onClick={this.handleClick}>Click</button>
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

