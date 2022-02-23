import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    //   let message;
    //   if(this.state.isLoggedIn) {
    //       message = <div>Hello Harry styles</div>
    //   }else {
    //       message = <div>Hello Guest</div>
    //   }

    //   return <div>{message}</div>
    // return (
    //     this.state.isLoggedIn ? 
    //     <div>Hello Harry styles</div> :
    //     <div>Hello Guest You have to logged In</div>
    // )

    return this.state.isLoggedIn && <div>Hello Harry styles</div>
    
  }
}

export default UserGreeting;
