import React from 'react';
import './ValidationMessage.css';

const ValidationMessage = (props) => {
  return (
    <div className='ValidationMessage'>
      <h3>{props.message}</h3>
    </div>
  );
};

ValidationMessage.defaultProps = {
  message: 'nothing',
};

export default ValidationMessage;
