import { fetchArticles } from "../api";
import { useState, useEffect } from "react";
import '../Styles/articles.css'
import Loading from "./Loading";
import { Link } from "react-router-dom";


const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
    .then((articles) => {
      setIsLoading(false);
      return setArticles(articles)})
      .catch((err) => console.log(err));
      
    }, []);
    
    if (isLoading) return <Loading isLoading={isLoading}/>
    
    return (
      <section className='articles-list'>
        <Link to='/articles/breaking'>
          <div className='top_story'>
            <h2>Breaking News</h2>
            <img src={require('../Images/cameras.jpg')} alt='news cameras' />
            <h3>Successful Entrepreneur Sets Sights on NZ Tech Industry</h3>
          </div>
        </Link>
        {articles.map((article) => (
          <Link to={`/articles/${article.article_id}`} key={article.article_id}>
            <div key={article.article_id} className='article'>
              <img src={article.article_img_url} alt={article.title} />
              <h6>{article.title}</h6>
              <p className='comment_num'>{article.comment_count} 💬</p>
              <p className='vote_num'>{article.votes} 👍</p>
            </div>
          </Link>
        ))}
      </section>
    );
}

export default ArticlesList;