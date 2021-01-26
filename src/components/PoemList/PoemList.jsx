import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { deletePoem, getPoems } from '../../api/poemFinder';
import { getStyles } from '../../api/styleFinder';
import { PoemContext } from '../../context/poemContext';
import { StyleContext } from '../../context/styleContext';
import Poem from '../Poem/Poem';

import './PoemList.css';

const PoemList = (props) => {
  const history = useHistory();
  const { poems, setPoems } = useContext(PoemContext);
  const { styles, setStyles } = useContext(StyleContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const poemResults = await getPoems();
        const styleResults = await getStyles();
        setPoems(poemResults.data);
        setStyles(styleResults.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [setPoems, setStyles]);

  const handleDelete = async (id) => {
    try {
      await deletePoem(id);
      setPoems(poems.filter((poem) => poem.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (id) => {
    history.push(`poems/create/${id}`);
  };

  return (
    <ul className='PoemList'>
      {poems &&
        poems.map((poem, index) => (
          <Poem
            key={index}
            id={poem.id}
            title={poem.title}
            body={poem.body}
            style={styles[poem.style]}
            onDelete={() => handleDelete(poem.id)}
            onEdit={() => handleEdit(poem.id)}
          />
        ))}
    </ul>
  );
};

export default PoemList;
