import React, { PureComponent } from 'react'

class PureComponent1 extends PureComponent {
  render() {
    console.log("purecomponent");
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default PureComponent1
