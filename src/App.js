import './Styles/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ArticlesList from './Components/ArticlesList';
import { Route, Routes } from 'react-router';
import SingleArticle from './Components/SingleArticle';
import BreakingArticle from './Components/BreakingArticle';
import { useContext, useEffect } from 'react';
import { UserContext } from './Contexts/UserLogin';
import LogIn from './Components/LogIn';
import Account from './Components/Account';

function App() {
  const { user, setUser, loggedIn, setLoggedIn } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));

    if (user) {
      setUser(user);
    }

    if (loggedIn) {
      setLoggedIn(loggedIn);
    }
    
  }, [setUser, setLoggedIn]);

  return (
    <div className='App'>
      <Header
        user={user}
        setUser={setUser}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path="/account" element={<Account />}/>
        <Route path='/' element={<ArticlesList />} />
        <Route path='/articles' element={<ArticlesList />} />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
        <Route path='/articles/breaking' element={<BreakingArticle />} />
        <Route
          path='/articles/:article_id/comments'
          element={<SingleArticle />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
