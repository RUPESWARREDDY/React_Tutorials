import React, { Component } from 'react'
import axios from 'axios'
class HttpGet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errormsg:''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.setState({posts:response.data})})
            .catch(error=>{
                console.log(error)
                this.setState({errormsg:'error retrieving data'})
            })
    
    }
    
  render() {
    let{posts,errormsg}=this.state
    return (
      <div>
        list of posts
        {posts.length?posts.map((post)=>{
            return <div>{post.title}</div>
        }):(errormsg?<h1>{errormsg}</h1>:null)}
      </div>
    )
  }
}

export default HttpGet
