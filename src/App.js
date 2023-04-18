import './Styles/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ArticlesList from './Components/ArticlesList';
import { Route, Routes } from 'react-router';
import SingleArticle from './Components/SingleArticle';

function App() {
  return (
    <main className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>

     <Footer />
    </main>
  );
}

export default App;
