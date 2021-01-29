import React from 'react';
import propTypes from 'prop-types';
import './Poem.css';

const Poem = (props) => {
  return (
    <li className='Poem'>
      <button
        aria-haspopup='menu'
        className={'Poem-Title-Container'}
        onClick={props.onToggle}
      >
        <h3>{props.title.toUpperCase()}</h3>
      </button>
    </li>
  );
};

Poem.propTypes = {
  id: propTypes.number,
  title: propTypes.string,
  body: propTypes.string,
  onDelete: propTypes.func,
  onEdit: propTypes.func,
  style: propTypes.object,
};

export default Poem;
