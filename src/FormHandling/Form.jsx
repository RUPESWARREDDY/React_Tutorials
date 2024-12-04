import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:''
      }
    }
    handleUserChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    handleCommentsChange=(e)=>{
        this.setState({
            comments:e.target.value
        })
    }
    handleTopicChange=(e)=>{
        this.setState({
            topic:e.target.value
        })
        console.log(this.state.topic);
    }
    handleSubmit=(e)=>{
      e.preventDefault()
        alert(`${this.state.comments}${this.state.topic} ${this.state.username}`)
      
    }

    
  render() {
    let{username,comments,topic}=this.state
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
         <input type="text" name={username} value={username} onChange={this.handleUserChange} />
         <textarea name={comments} id="" value={comments} onChange={this.handleCommentsChange}></textarea>
   <select name={topic} value={topic} onChange={this.handleTopicChange} id="">
    <option value=''>select option</option>
    <option value="react">react</option>
    <option value="angular">angular</option>
    <option value="vue">vue</option>
   </select>
   <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default Form
