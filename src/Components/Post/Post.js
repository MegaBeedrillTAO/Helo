import React, { Component } from 'react'


export default class Post extends Component {
    
    render() {
        //const {postid} = this.props.match.params
        //console.log(this.props.match.params.postid);
        return (
            <div>
                
                <h1>Here is my match params shit: {this.props.match.params.postid}</h1>
            </div>
        )
    }
}
