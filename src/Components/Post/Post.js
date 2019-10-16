import React, { Component } from 'react'

export default class Post extends Component {
    
    render() {
        return (
            <div className='post'>
                <h2>{this.props.title}</h2>
                <section>
                    <p>{this.props.author}</p>
                    <img src={this.props.pic} alt='profile pic'/>
                </section>
            </div>
        )
    }
}
