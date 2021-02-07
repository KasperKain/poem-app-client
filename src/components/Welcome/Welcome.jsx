import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className='Welcome'>
      <h1>Welcome</h1>
      <p className='Intro'>
        This is currently just a demo. This application will be updated
        regularly until full release. <br /> <br />A FEW THINGS YOU CAN DO RIGHT
        NOW -
      </p>

      <p className='A-List-Of-Things-You-Can-Do-Or-Whatever'>
        * Navigate through the application by clicking the links at the top of
        the page. <br />
        * Clicking the title at the top left will bring you back here. <br />
        * 'My Poems' Will show you a list of all of your poems. <br />
        * You can click on any of the poems to view them in detail <br />
        * While viewing details, You can edit or delete the poem entirely <br />
        * 'New Poem' Will allow you to create a new poem. <br />
      </p>
    </div>
  );
};

export default Welcome;
