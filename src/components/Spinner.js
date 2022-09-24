import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div>
        {/* <div className="spinner-grow" style={{width: "3rem", height: "3rem"}} role="status">
      <span className="sr-only"></span>
    </div> */}
    <div className="spinner-border text-info " role="status">
  <span className="sr-only "></span>
</div>
    </div>
    )
  }
}

export default Spinner