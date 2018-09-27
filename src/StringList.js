import React, { Component } from 'react'

class ListContainer extends Component {

  constructor(props) {
    super(props);
  }
  render() {



    return (
      <ul>
          {
            this.props.list.map((item) => {
              return <li>{item}</li>;
            })
          }
      </ul>
    )
  }
}

export default ListContainer;
