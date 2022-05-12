import React, { Component } from 'react';

import notCat from '../assets/not-cat.jpeg'

class NotFound extends Component {
  render() {
    return(
      <div className="page-body">
         <br />
        <h3>No cat, just the ugligest dog in the world</h3>
        <img src={notCat} alt="ugligest dog in the world" className="cat-friend" />
        <br />
      </div>
    )
  }
}
export default NotFound