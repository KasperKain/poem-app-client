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
        <h1>{props.title.toUpperCase()}</h1>
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

Poem.defaultProps = {
  id: 0,
  title: 'err',
  body: 'err',
  onDelete: function () {},
  onEdit: function () {},
  style: { head_style: 'null', body_style: 'null' },
};

export default Poem;
