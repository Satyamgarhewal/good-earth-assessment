import React from 'react';
import Sidebar from '../Sidebar/sidebar';
import '../../App.css';
class Visualize extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>
    );
  }
}

export default Visualize;
