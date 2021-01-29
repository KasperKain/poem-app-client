import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const links = [
  { name: 'POEM KEEPER', path: '/' },
  { name: 'My Poems', path: '/poems' },
  { name: 'New Poem', path: '/poems/create' },
];

const Header = () => {
  return (
    <header className='Header'>
      <nav>
        <div className='Header-Title'>
          <h1>
            <Link to={links[0].path}>{links[0].name}</Link>
          </h1>
        </div>

        <div className='Header-Links'>
          {links.slice(1).map((link, index) => (
            <Link key={index} to={link.path}>
              <li>{link.name}</li>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
