export function setLocalStorage(action, key, value) {
  if (action === 'setList1Item') {
    try {
      let list1 = JSON.parse(localStorage.getItem('list1'));
      let list1Length = list1.length;
      list1[list1Length] = value;
      list1 = JSON.stringify(list1);
      localStorage.setItem(key, list1);
    } catch (e) {
      console.log('err while adding item in list1 >>>>>>>>>', e);
    }
  } else if (action === 'setList2Item') {
    try {
      let list2 = JSON.parse(localStorage.getItem('list2'));
      let list2Length = list2.length;
      list2[list2Length] = value;
      list2 = JSON.stringify(list2);
      localStorage.setItem(key, list2);
    } catch (e) {
      console.log('err while add item in list 2', e);
    }
  } else if (action === 'createList1') {
    try {
      value = JSON.stringify(value);
      localStorage.setItem(key, value);
    } catch (e) {
      console.log('error while creating list 1>>>>>>>>>>>', e);
    }
  } else if (action === 'createList2') {
    try {
      value = JSON.stringify(value);
      localStorage.setItem(key, value);
    } catch (e) {
      console.log('error while creating list 2>>>>>>>>>>>', e);
    }
  } else if (action === 'changeList2Item') {
    try {
      localStorage.setItem(key, []);
      localStorage.setItem(key, value);
    } catch (e) {
      console.log('error while changing list 2');
    }
  }
}

export function getLocalStorage(key) {
  try {
    let response = JSON.parse(localStorage.getItem(key));
    console.log('response fetched >>>>>>>', response);
    return response;
  } catch (e) {
    return e;
  }
}

export function removeLocalStorage(action, key, value) {
  console.log('value >>>>>>>>>>', value);
  if (action === 'removefromList1') {
    let listToRemove = JSON.parse(localStorage.getItem(key));
    let newlistToRemove = listToRemove.splice(value, 1);
  }
}
