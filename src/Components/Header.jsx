import { Link } from 'react-router-dom';
import { VscAccount, VscMenu } from 'react-icons/vsc';
import Media from 'react-media';
import '../Styles/header.css';
import { fetchTopics } from '../api';
import { useState, useEffect } from 'react';

const Header = ({user, setUser, loggedIn, setLoggedIn, topics, setTopics}) => {
  
  return (
    <>
      <header>
        <Link to='/'>
          <h1>BBB News</h1>
        </Link>
        <h6>Bobby's Bulletin Board</h6>
        <nav className='menu-button'>
          {loggedIn ? (
            <Link to='/account'>
              <img
                className='user-avatar'
                src={user.avatar_url}
                alt={`${user.name} account avatar`}
              />
            </Link>
          ) : (
            <Link to='/login'>
              <VscAccount className='account_icon' />
            </Link>
          )}
          <Media queries={{ small: { maxWidth: 450 } }}>
            <VscMenu className='menu-icon' />
          </Media>
        </nav>
      </header>
      <Media queries={{ small: { minWidth: 450 } }}>
        <nav className='nav'>
          {topics.map((topic) => {
            return (
              <Link key={topic.slug} to={`/topics/${topic.slug}`}>
                <p key={topic.slug}>{topic.slug}</p>
              </Link>
            );
          })}
        </nav>
      </Media>
    </>
  );
};

export default Header;
