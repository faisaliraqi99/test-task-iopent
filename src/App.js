import React from 'react';

import Tree from './components/Tree';
import flatArr from './data';

function App() {

  function unflatten(arr) {
    var tree = [],
      mappedArr = {},
      arrElem,
      mappedElem;

    for (var i = 0, len = arr.length; i < len; i++) {
      arrElem = arr[i];
      mappedArr[arrElem.id] = arrElem;
      mappedArr[arrElem.id]['children'] = [];
    }

    for (var id in mappedArr) {
      if (mappedArr.hasOwnProperty(id)) {
        mappedElem = mappedArr[id];
        if (mappedElem.parentId) mappedArr[mappedElem['parentId']]['children'].push(mappedElem)
        else tree.push(mappedElem);
      }
    }
    return tree;
  }

  const data = unflatten(flatArr);

  return <div className="tree-list"><Tree data={data} /></div>;
}

export default App;