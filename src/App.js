import './Styles/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import UserLogin from './Components/UserLogin';
import Loading from './Components/Loading';
import { useState, useEffect } from 'react';
import ArticlesList from './Components/ArticlesList';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { isLoading, setIsLoading } = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(fetch('https://be-news-api-m2rq.onrender.com/api/users'))
    console.log(users);
  }, [setUsers]);

  return (
    <main className='App'>
      <Header />
      <Loading isLoading={isLoading} />
      {loggedIn ? (
        <h1>Welcome, {loggedIn.username}</h1>
      ) : (
        <UserLogin setLoggedIn={setLoggedIn} />
        )}
        <ArticlesList />
      <Footer />
    </main>
  );
}

export default App;
