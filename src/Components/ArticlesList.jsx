import { fetchArticles } from "../api";
import { useState, useEffect } from "react";
import '../Styles/articles.css'
import Loading from "./Loading";

const ArticlesList = () => {
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
    .then((articles) => setArticles(articles))
    .catch((err) => console.log(err));
    
  }, []);
  
  return (
    <section className="articles-list">
      {articles.map((article) => (
        <div key={article.article_id} className="article">
          <img src={article.article_img_url} alt={article.title}/>
          <h6>{article.title}</h6>
          <p className="comment_num">{article.comment_count} 💬</p>
          <p className="vote_num">{article.votes} 👍</p>
        </div>
      ))}
    </section>
  );
}

export default ArticlesList;