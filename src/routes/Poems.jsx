import React from 'react';
import PoemList from '../components/PoemList/PoemList';
import PoemDetails from '../components/PoemDetails/PoemDetails';
const Poems = () => {
  return (
    <section className='Poems'>
      <PoemDetails />
      <PoemList />
    </section>
  );
};

export default Poems;
