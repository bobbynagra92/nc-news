import './Styles/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ArticlesList from './Components/ArticlesList';
import { Route, Routes } from 'react-router';
import SingleArticle from './Components/SingleArticle';
import BreakingArticle from './Components/BreakingArticle';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
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
