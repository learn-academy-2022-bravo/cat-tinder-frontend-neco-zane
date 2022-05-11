import React, { Component } from 'react';

import notCat from '../assets/not-cat.jpeg'

class NotFound extends Component {
  render() {
    return(
      <div className="page-body">
        <h3>ugligest dog in the world</h3>
        <br />
        <img src={notCat} alt="ugligest dog in the world" className="cat-friend" />
      </div>
    )
  }
}
export default NotFound