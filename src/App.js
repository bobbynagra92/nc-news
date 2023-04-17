import './Styles/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import UserLogin from './Components/UserLogin';
import Loading from './Components/Loading';
import { useState, useEffect } from 'react';
import ArticlesList from './Components/ArticlesList';
import { fetchUsers } from './api';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { isLoading, setIsLoading } = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));
  }, [setUsers]);

  return (
    <main className='App'>
      <Header />
        <ArticlesList />
      <Footer />
    </main>
  );
}

export default App;
