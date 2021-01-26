import React, { useState } from 'react';
import propTypes from 'prop-types';
import './Poem.css';
import './PoemStyle.css';

const Poem = (props) => {
  const [expanded, setExpanded] = useState('');

  const toggleExpanded = () => {
    setExpanded(
      expanded === 'closed' || expanded === '' ? 'expanded' : 'closed'
    );
  };

  return (
    <li className='Poem'>
      <button
        className={`Poem-Title-Container ${props.style.head_style}`}
        onClick={() => toggleExpanded()}
      >
        <h3>TITLE: {props.title}</h3>
      </button>
      <div className={`Poem-Content-Container ${expanded}`}>
        <div className='Poem-Text'>
          <p>CONTENT: {props.body}</p>
        </div>
        <div className='Poem-Button-Container'>
          <button onClick={props.onDelete}>DELETE</button>
          <button onClick={props.onEdit}>EDIT</button>
        </div>
      </div>
    </li>
  );
};

Poem.propTypes = {
  id: propTypes.number,
  title: propTypes.string,
  body: propTypes.string,
  onDelete: propTypes.func,
  onEdit: propTypes.func,
};

Poem.defaultProps = {
  style: 'nothing',
};

export default Poem;
