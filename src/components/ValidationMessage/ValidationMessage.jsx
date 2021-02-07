import React from 'react';
import './ValidationMessage.css';

const ValidationMessage = (props) => {
  return (
    <div className='ValidationMessage'>
      <p>{props.message}</p>
    </div>
  );
};

ValidationMessage.defaultProps = {
  message: 'nothing',
};

export default ValidationMessage;
