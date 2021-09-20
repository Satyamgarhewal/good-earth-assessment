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
      sortingOrder: '',
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
    console.log('value changed >>>>>>>', value);
    console.log('type of value >>>>>>>>', typeof value);
    const { list1, list2 } = this.state;
    let newList2 = [...list2, list1[value]];
    let action = '';
    let key = '';
    let passingValue;
    passingValue = list1[value];
    this.setState(
      {
        list2: newList2,
      },
      () => {
        console.log('change in list 2 >>>>>', this.state.list2);
      }
    );
    action = 'setList2Item';
    key = 'list2';
    setLocalStorage(action, key, passingValue);
    let removedList1 = list1.splice(value, 1);
    let updatedList1 = list1;
    console.log('updated list1 >>>>>>>>', updatedList1);
    // localStorage.removeItem('list1');
    action = 'rewriteList1';
    key = 'list1';
    setLocalStorage(action, key, JSON.stringify(updatedList1));
    // localStorage.setItem('list1', JSON.stringify(updatedList1));
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
    this.setState({
      list1: newList1,
    });
    action = 'setList1Item';
    key = 'list1';
    setLocalStorage(action, key, passingValue);
    let removedList2 = list2.splice(value, 1);
    let updatedList2 = list2;
    console.log('updated list1 >>>>>>>>', updatedList2);
    action = 'rewriteList2';
    key = 'list2';
    setLocalStorage(action, key, JSON.stringify(updatedList2));

    // localStorage.removeItem('list1');
    // localStorage.setItem('list2', JSON.stringify(updatedList2));
  };

  handleSortingOrder = (e) => {
    const { name, value } = e.target;
    const { list1, list2 } = this.state;
    console.log('sorting order>>>>>>>>', value);
    let tempList1;
    let tempList2;
    if (value === 'sortByValue') {
      tempList1 = list1.sort((a, b) => {
        return a.blockValue - b.blockValue;
      });
      tempList2 = list2.sort((a, b) => {
        return a.blockValue - b.blockValue;
      });
      console.log('temp list 1>>>>>>>', tempList1);
      console.log('temp list 1>>>>>>>', tempList2);
    } else if (value === 'sortByColor') {
      tempList1 = list1.sort((a, b) => {
        let fa = a.backgroundColor.toLowerCase();
        let fb = b.backgroundColor.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      tempList2 = list2.sort((a, b) => {
        let fa = a.backgroundColor.toLowerCase();
        let fb = b.backgroundColor.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }
    this.setState({
      [name]: [value],
    });
  };

  render() {
    const { list1, list2, sortingOrder } = this.state;
    return (
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <div
              style={{ float: 'right', marginRight: '50px', marginTop: '20px' }}
            >
              <div className="selectList">
                <select
                  className="form-select"
                  name="sortingOrder"
                  value={sortingOrder}
                  onChange={this.handleSortingOrder}
                >
                  <option selected>Sorting Order</option>
                  <option value="sortByValue">Sort by Value</option>
                  <option value="sortByColor">Sort by Color</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '50px' }}>
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
      </div>
    );
  }
}

export default DisplayList;
