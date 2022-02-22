import React, { Component } from 'react'

class Event extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Hi Harry Styles 😍"
    }

    // this.clickHandler = this.clickHandler.bind(this);
  } 

//   clickHandler() {
//       this.setState({
//           message: "Bye Harry Styles 😘"
//       })
//       console.log(this)
//   }

clickHandler = () => {
    this.setState({
        message: "Bye Harry Styles 😘"
    })
}
    
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          {/* <button onClick={this.clickHandler.bind(this)}>Event</button> */}
           {/* <button onClick={() => this.clickHandler()}>Event</button>  */}
           <button onClick={this.clickHandler}>Event</button> 
      </div>
    )
  }
}

export default Event