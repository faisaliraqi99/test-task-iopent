import React from 'react';

function Tree({data}) {

  const sortedData = [...data.sort(compare)];

  function compare(a,b) {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  }

  const arrOfNums = [];

  return sortedData.map(item => <h3 key={item.id}>{item.title}</h3>);
}

export default Tree;