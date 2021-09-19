import React from 'react';
import { BlockPicker } from 'react-color';
import { setLocalStorage, getLocalStorage } from '../../utils/localStorage';

import './addColorForm.css';
class AddColorForm extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: '',
      displayColorPicker: false,
      blockValue: '',
      listValue: '',
    };
    this.popover = {
      position: 'absolute',
      zIndex: '2',
      marginLeft: '30px',
    };
    this.cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChangeComplete(color, event) {
    event.preventDefault();
    this.setState({
      backgroundColor: color.hex,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { backgroundColor, blockValue, listValue } = this.state;
    let list1Array = [];
    let list2Array = [];
    let action = '';
    let list1Response = getLocalStorage('list1');
    let list2Response = getLocalStorage('list2');

    if (listValue === '1') {
      if (!list1Response) {
        action = 'createList1';
        setLocalStorage(action, 'list1', list1Array);
      }
      let list1Obj = {
        backgroundColor: backgroundColor,
        blockValue: blockValue,
        listValue: listValue,
      };
      action = 'setList1Item';
      setLocalStorage(action, 'list1', list1Obj);
    } else if (listValue === '2') {
      if (!list2Response) {
        action = 'createList2';
        setLocalStorage(action, 'list2', list2Array);
      }
      let list2Obj = {
        backgroundColor: backgroundColor,
        blockValue: blockValue,
        listValue: listValue,
      };
      action = 'setList2Item';
      setLocalStorage(action, 'list2', list2Obj);
    } else {
      if (!list1Response) {
        action = 'createList1';
        setLocalStorage(action, 'list1', list1Array);
      } else if (!list2Response) {
        action = 'createList2';
        setLocalStorage(action, 'list2', list2Array);
      }
    }
    this.setState({
      backgroundColor: '',
      blockValue: '',
      listValue: '',
    });
  }

  handleFormChange(e) {
    e.preventDefault();
    let { name, value } = e.target;
    console.log('name, value', name, value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClose = (e) => {
    this.setState({
      displayColorPicker: false,
    });
  };

  render() {
    const { backgroundColor, displayColorPicker, blockValue, listValue } =
      this.state;
    return (
      <div>
        <form className="colorForm" onSubmit={this.handleFormSubmit}>
          <div className="color">
            <label>
              Color:
              <input
                type="text"
                id="colorText"
                value={backgroundColor}
                name="backgroundColor"
                onChange={this.handleFormChange}
              />
            </label>

            {/* <BlockPicker
            color={backgroundColor}
            onChange={handleChangeComplete}
          /> */}
          </div>
          <div className="Pickcolor">
            <label>Pick color : </label>
            <button
              className="btn btn-primary ml-1"
              onClick={this.handleFormChange}
              name="displayColorPicker"
              value={displayColorPicker}
            >
              Pick Color
            </button>
            {displayColorPicker ? (
              <div style={this.popover}>
                <div style={this.cover} onClick={this.handleClose} />
                <BlockPicker
                  color={backgroundColor}
                  onChange={this.handleChangeComplete}
                />
              </div>
            ) : null}
          </div>
          <div className="value">
            <label>
              Value:
              <input
                type="text"
                id="valueText"
                name="blockValue"
                value={blockValue}
                onChange={this.handleFormChange}
              />
            </label>
          </div>
          <div className="selectList">
            <label>List:</label>

            <select
              className="select"
              name="listValue"
              value={listValue}
              onChange={this.handleFormChange}
            >
              <option selected>Select List</option>
              <option value="1">List 1</option>
              <option value="2">List 2</option>
            </select>
          </div>
          <div className="addItem">
            {/* <button onClick={this.handleFormSubmit}>Add Item</button> */}
            <button
              className="add"
              type="button"
              class="btn btn-primary"
              onClick={this.handleFormSubmit}
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddColorForm;
