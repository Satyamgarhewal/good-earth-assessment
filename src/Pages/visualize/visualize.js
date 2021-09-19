import React from 'react';
import Sidebar from '../../Components/Sidebar/sidebar';
import DisplayList from '../../Components/displayList/displayList';
import '../../App.css';
class Visualize extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <div class="row align-items-start">
          <div className="col-md-4">
            <div className="App">
              <Sidebar />
            </div>
          </div>
          <div className="col-md-8">
            <DisplayList />
          </div>
        </div>
      </div>
    );
  }
}

export default Visualize;
