import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// Links
const links = [
  { name: 'POEM KEEPER', path: '/' },
  { name: 'My Poems', path: '/poems' },
  { name: 'New Poem', path: '/poems/create' },
];

const Header = () => {
  return (
    // UI COMPONENT
    <header className='Header'>
      <nav>
        <div className='Header-Title'>
          {/* Generate home link and make it the title of the page */}
          <Link to={links[0].path}>
            <h1>{links[0].name}</h1>
          </Link>
        </div>

        <ul className='Header-Links'>
          {/* Generate remaining links */}
          {links.slice(1).map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
