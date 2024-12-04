import React, { Component } from 'react'
import axios from'axios'
import { Alert } from 'bootstrap/dist/js/bootstrap.bundle.min'
export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userid:'',
         title:"",
         body:""
      }
    }
    change=(e)=>{this.setState({[e.target.name]:e.target.value})}
    submitHandler=(e)=>{e.preventDefault();

        alert('Submitted data:');
        axios.post('http://localhost:3000/data',this.state)
        .then(response=>{console.log(response)})
        .catch(error=>{console.log(error)})
    }
  render() {
    const{userid,title,body}=this.state
    return (
      <div>
        <form action="" onSubmit={this.submitHandler}>
            <div><input type="text" name="userid" value={userid} onChange={this.change}/></div>
            <div><input type="text" name="title" value={title} onChange={this.change}/></div>
            <div><input type="text" name="body" value={body} onChange={this.change}/></div>
            <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default HTTPPost
