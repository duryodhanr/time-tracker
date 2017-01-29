import React from 'react';

function Input( props ) {
  return (
  <input
         {...props}
         className={ "input" }
         onChange={ (e) => props.onChange( e ) } />
  );
}

export default Input;
