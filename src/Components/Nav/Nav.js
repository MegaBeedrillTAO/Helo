import React, { Component } from 'react'
import { connect } from 'react-redux'
import {changePage} from '../../ducks/reducer'
import {Redirect} from 'react-router-dom'

class Nav extends Component {
    

    render() {
        
        
        return (
            <div className={this.props.nav}>
               
                {this.props.page === '/' ?
                    <Redirect to='/'/>:
                this.props.page === '/dashboard'?
                    <Redirect to='/dashboard'/>:
                this.props.page === '/new'?
                    <Redirect to='/new'/>:
                    null
            
                }
                 
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        page: reduxState.reducer.page,
        nav: reduxState.reducer.nav
    }
}

const mapDispatchToProps = {
    changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
