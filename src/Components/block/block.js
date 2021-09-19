import React from 'react';

function Block(props) {
  console.log('porps>>>>>>>>>>>>', props);
  const { backgroundColor, blockValue, listValue } = props.item;
  return (
    <div className="blockBox">
      {
        <button
          className="btn btn-primary"
          disabled
          style={{
            background: backgroundColor,
            color: 'black',
            width: '100%',
            marginTop: '10px',
          }}
        >
          {props.item.blockValue}
        </button>
      }
    </div>
  );
}

export default Block;
