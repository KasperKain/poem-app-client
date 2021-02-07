import React, { useContext } from 'react';
import { deleteStyle } from '../../api/styleFinder';
import { deletePoem } from '../../api/poemFinder';
import { PoemDetailsContext } from '../../context/poemDetailsContext';
import { PoemContext } from '../../context/poemContext';
import './PoemDetails.css';

import heartImage1 from '../../images/heart1.png';
import heartImage2 from '../../images/heart2.png';
import heartImage3 from '../../images/heart3.png';
import heartImage4 from '../../images/heart4.png';
import heartImage5 from '../../images/heart5.png';
import { useHistory } from 'react-router-dom';

const PoemDetails = (props) => {
  const { poemDetails, expanded, setExpanded } = useContext(PoemDetailsContext);
  const { poems, setPoems } = useContext(PoemContext);
  const history = useHistory();

  const generateMoodImage = () => {
    let heartImage;
    switch (poemDetails.style.head_style) {
      case 'mood_peace':
        heartImage = heartImage2;
        break;
      case 'mood_sorrow':
        heartImage = heartImage3;
        break;
      case 'mood_anger':
        heartImage = heartImage4;
        break;
      case 'mood_fear':
        heartImage = heartImage5;
        break;
      default:
        heartImage = heartImage1;
        break;
    }
    return <img className='Heart-Image' src={heartImage} alt='heart'></img>;
  };

  const handleDelete = async (id, styleId) => {
    try {
      await deletePoem(id);
      await deleteStyle(styleId);
      setPoems(poems.filter((poem) => poem.id !== id));
      setExpanded('closed');
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (id) => {
    setExpanded('closed');
    history.push(`/poems/edit/${id}`);
  };

  const generateExpandedPage = () => {
    if (expanded === 'expanded') {
      return (
        <div
          className={`Poem-Content-Container ${poemDetails.style.body_style}`}
        >
          <button
            className='Exit'
            onClick={() =>
              setExpanded(expanded === 'closed' ? 'expanded' : 'closed')
            }
          >
            BACK
          </button>
          <div className='Poem-Content'>
            <div className='Poem-Text'>
              <h1>{poemDetails.title}</h1>
              <div className='Heart-Image-Container'>{generateMoodImage()}</div>
              <p>{poemDetails.body}</p>
            </div>
          </div>
          <div className='Poem-Button-Container'>
            <button
              onClick={() =>
                handleDelete(poemDetails.poemID, poemDetails.styleID)
              }
            >
              DELETE
            </button>
            <button onClick={() => handleEdit(poemDetails.poemID)}>EDIT</button>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };
  return (
    <div className={`PoemDetails ${expanded}`}>{generateExpandedPage()}</div>
  );
};

export default PoemDetails;
