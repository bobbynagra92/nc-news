import './Styles/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ArticlesList from './Components/ArticlesList';
import { Route, Routes } from 'react-router';
import SingleArticle from './Components/SingleArticle';
import BreakingArticle from './Components/BreakingArticle';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from './Contexts/UserLogin';
import LogIn from './Components/LogIn';
import Account from './Components/Account';
import TopicArticles from './Components/TopicArticles';
import { fetchTopics } from './api';

function App() {
  const { user, setUser, loggedIn, setLoggedIn } = useContext(UserContext);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));

    fetchTopics()
      .then((topics) => setTopics(topics))
      .catch((err) => console.log(err));

    if (user) {
      setUser(user);
    }

    if (loggedIn) {
      setLoggedIn(loggedIn);
    }
    
  }, [setUser, setLoggedIn, setTopics]);

  return (
    <div className='App'>
      <Header
        user={user}
        setUser={setUser}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        topics={topics}
        setTopics={setTopics}
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
        {topics.map((topic) => 
          <Route key={topic.slug} path={`/topics/${topic.slug}`} element={<TopicArticles topic={topic}/>} />
        )}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
