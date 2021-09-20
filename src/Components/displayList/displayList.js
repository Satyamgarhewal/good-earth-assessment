import React from 'react';
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from '../../utils/localStorage';
import Block from '../block/block';

class DisplayList extends React.Component {
  constructor() {
    super();
    this.state = {
      list1: [],
      list2: [],
    };
  }
  componentDidMount() {
    let list1 = [];
    let list2 = [];
    list1 = getLocalStorage('list1');
    list2 = getLocalStorage('list2');

    this.setState({
      list1: list1,
      list2: list2,
    });
  }

  handleList1Change = (e) => {
    const { value, name } = e.target;
    const { list1, list2 } = this.state;
    let newList2 = [...list2, list1[value]];
    let action = '';
    let key = '';
    let passingValue;
    passingValue = list1[value];
    let list1State;
    let newList1 = list1.splice(value, 1);
    this.setState(
      {
        list2: newList2,
      },
      () => {}
    );
    list1State = this.state.list1;
    action = 'setList2Item';
    key = 'list2';
    setLocalStorage(action, key, passingValue);
  };
  handleList2Change = (e) => {
    console.log('target', e);
    const { value, name } = e.target;
    const { list1, list2 } = this.state;
    let newList1 = [...list1, list2[value]];
    let action = '';
    let key = '';
    let passingValue;
    passingValue = list2[value];
    let newList2 = list2.splice(value, 1);
    this.setState({
      list1: newList1,
    });
    action = 'setList1Item';
    key = 'list1';
    setLocalStorage(action, key, passingValue);
  };
  render() {
    const { list1, list2 } = this.state;
    return (
      <div style={{ marginTop: '100px' }} className="col-md-12">
        <div className="row">
          <div className="col-md-6">
            <p>List 1</p>
          </div>
          <div className="col-md-6">
            <p>List 2</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {list1 &&
              list1.map((item, index) => {
                return (
                  <div className="row">
                    <div className="col-md-4">
                      <Block item={item} />
                    </div>
                    <div className="col-md-2">
                      <button
                        value={index}
                        key={index}
                        name="list1"
                        className="btn btn-secondary mt-2"
                        onClick={this.handleList1Change}
                      >
                        {'>>'}
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-md-6">
            {list2 &&
              list2.map((item, i) => {
                return (
                  <div className="row">
                    <div className="col-md-2">
                      <button
                        value={i}
                        key={i}
                        className="btn btn-secondary mt-2"
                        onClick={this.handleList2Change}
                      >
                        {'<<'}
                      </button>
                    </div>
                    <div className="col-md-4">
                      <Block item={item} />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayList;
