import React, { Component } from 'react'
import Post from '../Post/Post'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            search: '',
            checkbox: true,
            posts: []
        }
    }

    componentDidMount(){
        axios.get(`/posts/get?check=${this.state.checkbox}`).then(response => {
            this.setState({posts: [...response.data]})
        })
    }

    handleSearch = (e) => {
        this.setState({search: e.target.value})
    }
    handleCheck = () => {
        this.setState({checkbox: !this.state.checkbox})
        
    }
    

    render() {
        const post = this.state.posts.map((el, i) => (
            <Post
            key={i}
            title = {el.title}
            author = {el.username}
            pic = {el.profile_pic}
            />
        ))
        return (
            <div className='dashboard'>
                <section className='search-bar'>
                    <input className='search-input' onChange={this.handleSearch}/>
                    <img className='search-button' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAeJJREFUSA2tlM0rBGEcx3dWEREp4oBVrvsXLJEoTsR/QDk6ydt1E2ccuIniKGeEi4MLbY6SAzaRUt5C1uer9pkZM7PM2m99muf5vT0zz/yeJxLxUSaTKYch2IJzeIF7SMECdPikeUzWTwuJI9iSUA0HcAhpKIVm6IEWkG/UsqwUz9yiaAmswScsQ31QBr4uOIEnGAyKM3aCVFjB/caYY0CcXmYVPqA7MBTnCOiN/1Q4W4h4C/Rf9D9qs3bzxKifdwNLxhhiQF4V3MGiJw2juuIN6jzOPxrInYRnKHOlYNBnbbuMISfkx0Dqc6ZGmcRB7Za3aMcLkq9BtYxUXC2nPv6vVMPVvir+Ajog/5VqvDqLqPgVxJzGsGP2uoicBlAtIxXfh15jyW+QIK0CdCXYYtV2kDpta7gRuRtwBpYnE+MeHEOxx/mLgZxW0Oke9g3FEYdHWAHv6r5ZkQixTZCGXdAW+wvnALzDJlT6R9lWYhKgwtKM7QkYEaSrVJfQLYxDozOUeRTaYB20FTuQBGnKGes7JqgG5kHXr3QJR3AKDyDp5+lO+t4KnhMguRYI3F8CdSh0T+tI6+TpgKiP1W7HHPkMTyPiJ5jMwTS+WeMo1EALgOT6gkLVVwdlF9CXFF4sMAapL60vtT4ftHlFAAAAAElFTkSuQmCC' alt='search'/>
                    <button className='reset-button'>Reset</button>
                    <div className='checkbox-holder'>
                    <p>My Posts</p>
                    <input type='checkbox' defaultChecked='on' onChange={this.handleCheck}/>
                    </div>
                </section>
                <main className='post-holder'>
                    {post}
                </main>
            </div>
        )
    }
}
