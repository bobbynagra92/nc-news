import './Styles/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ArticlesList from './Components/ArticlesList';
import { Route, Routes } from 'react-router';
import SingleArticle from './Components/SingleArticle';
import BreakingArticle from './Components/BreakingArticle';
import { useContext, useState } from 'react';
import { UserContext } from './Contexts/UserLogin';
import { fetchUserByUsername } from './api';
import SignIn from './Components/SignIn';


function App() {

  const {user, setUser, loggedIn, setLoggedIn} = useContext(UserContext);
  
  const signOut = () => {
    setLoggedIn(false);
    setUser({})
  }
  const username = 'grumpy19'
  const signIn = async (username) => {
    fetchUserByUsername(username).then(user => {
      setUser(user);
    })
  }
  const signingIn = signIn(username);
  console.log(user, 'user')


  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/articles/breaking" element={<BreakingArticle />} />
        <Route path="/articles/:article_id/comments" element={<SingleArticle />} />
      </Routes>

     <Footer />
    </div>
  );
}

export default App;
