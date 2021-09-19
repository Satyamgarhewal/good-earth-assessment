import React from 'react';
import Sidebar from '../../Components/Sidebar/sidebar';
import '../../App.css';
import AddColorForm from '../../Components/addColorForm/addColorForm';
function AddColor(props) {
  return (
    <div>
      <div class="row align-items-start">
        <div className="col-md-4">
          <div className="App">
            <Sidebar />
          </div>
        </div>
        <div className="col-md-8">
          <AddColorForm />
        </div>
      </div>
    </div>
  );
}

export default AddColor;
