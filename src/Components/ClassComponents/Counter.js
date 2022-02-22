import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  Add() {
    //   this.setState({
    //       count: this.state.count + 1
    //   }, ()=> { console.log('Callback value', this.state.count)})
    //   console.log(this.state.count);

    this.setState(prevState => ({        
        count: prevState.count + 1
    }))
    console.log(this.state.count);
  }

  AddFive() {
      this.Add();
      this.Add();
      this.Add();
      this.Add();
      this.Add();
  }

  render() {
    const {name, profasion} = this.props;

    return (
      <div>
        <div>
          Counter - {this.state.count} <br/><br/>
          <button onClick={() => this.AddFive()}>Add more</button>
          <h1>He is {name} and he is a great {profasion}</h1>
        </div>
      </div>
    );
  }
}

export default Counter;
