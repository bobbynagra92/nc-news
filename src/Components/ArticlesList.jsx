import { fetchArticles } from "../api";
import { useState, useEffect } from "react";

const ArticlesList = () => {
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles()
    .then((articles) => setArticles(articles))
    .catch((err) => console.log(err));
  }, []);

  return (
    <section className="articles-list">
      {articles.map((article) => (
        <div key={article.article_id} className="articles">
          <img src={article.article_img_url} alt={article.title}/>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
        </div>
      ))}
    </section>
  );
}

export default ArticlesList;