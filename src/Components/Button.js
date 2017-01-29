import React from 'react';

function Button( props ) {
  return (
  <button onClick={ (e) => props.onClick() }>
    { props.text }
  </button>
  );
}

export default Button;
