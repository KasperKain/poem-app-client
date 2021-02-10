import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getPoems } from '../../api/poemFinder';
import { getStyles } from '../../api/styleFinder';
import { PoemContext } from '../../context/poemContext';
import { PoemDetailsContext } from '../../context/poemDetailsContext';
import { StyleContext } from '../../context/styleContext';
import Poem from '../Poem/Poem';

import './PoemList.css';

const PoemList = (props) => {
  // States and context
  const history = useHistory();
  const { styles, setStyles } = useContext(StyleContext);
  const { poems, setPoems } = useContext(PoemContext);
  const { expanded, setExpanded, setPoemDetails } = useContext(
    PoemDetailsContext
  );

  useEffect(() => {
    // Once mounted, Retrieve poems and styles from database and update appropriate context.
    const fetchData = async () => {
      try {
        await getPoems().then((results) => setPoems(results.data));
        await getStyles().then((results) => setStyles(results.data));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [setPoems, setStyles]);

  // Redirect to edit page with poem id
  const handleEdit = (id) => {
    history.push(`poems/create/${id}`);
  };

  // Set the poem details expanded state to 'open', and update it's context with the clicked poems information.
  const toggleExpanded = (props) => {
    const poemStyle = styles.filter((style) => style.id === props.id);
    setPoemDetails({
      title: props.title,
      body: props.body,
      style: poemStyle[0],
      poemID: props.id,
      styleID: props.style,
    });
    setExpanded(expanded === 'closed' ? 'expanded' : 'closed');
  };

  // Generate a poem component
  const generatePoem = () => {
    return (
      poems &&
      styles &&
      poems.map((poem, index) => {
        return (
          <Poem
            key={index}
            id={poem.id}
            title={poem.title}
            body={poem.body}
            onToggle={() => toggleExpanded(poem)}
            onEdit={() => handleEdit(poem.id)}
          />
        );
      })
    );
  };

  return <ul className='PoemList'>{generatePoem()}</ul>;
};

export default PoemList;
