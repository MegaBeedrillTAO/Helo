import React, { Component } from 'react'
import { connect } from 'react-redux'
import {changePage} from '../../ducks/reducer'
import Axios from 'axios'

export class Form extends Component {

    constructor(){
        super();
        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }

    handleInput = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    addNewPost =  () =>{
        let {title, img, content} = this.state;
        Axios.post('/posts/add', {
            title,
            img,
            content
        }).then(()=> {
            this.props.changePage({ page: '/dashboard', nav: 'nav'})
        })
        
    }

    render() {
        return (
            <div className = 'form'>
                <section>
                    <h2>Title:</h2>
                    <input name='title' onChange={this.handleInput}/>
                </section>

                <section>
                    <h2>Image URL:</h2>
                    <input name='img' onChange={this.handleInput}/>
                </section>

                <section>
                    <h2>Content:</h2>
                    <input name='content' onChange={this.handleInput}/>
                </section>
                <button onClick={this.addNewPost}>Post</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    
})

const mapDispatchToProps = {
    changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)

