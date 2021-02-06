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
  const history = useHistory();
  const { styles, setStyles } = useContext(StyleContext);
  const { poems, setPoems } = useContext(PoemContext);
  const { expanded, setExpanded, setPoemDetails } = useContext(
    PoemDetailsContext
  );

  useEffect(() => {
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

  const handleEdit = (id) => {
    history.push(`poems/create/${id}`);
  };

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

  const generetePoem = () => {
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

  return <ul className='PoemList'>{generetePoem()}</ul>;
};

export default PoemList;
