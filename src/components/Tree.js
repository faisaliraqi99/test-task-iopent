import React from 'react';

import './Tree.css';

const Tree = ({ data }) => {
  if (!data) return null;
  return (
    <>
      {data.map((item) => {
        return (<div className="parent" key={item.id}>
          {item.title}
          <Tree data={item.children} />
        </div>)
      })}
    </>
  );
};

export default Tree;