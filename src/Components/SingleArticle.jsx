import { useState, useEffect } from 'react';
import '../Styles/articles.css';
import { fetchArticle, fetchUsers } from '../api';
import Loading from './Loading';
import { useParams } from 'react-router';

const SingleArticle = () => {
  const {article_id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchArticle(article_id)
      .then((article) => {
        setIsLoading(false);
        return setArticle(article)})
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) { return <Loading isLoading={isLoading} />;}

  return (
    <section className='single_article' key={article.article_id}>
      <h1>{article.title}</h1>
      <img src={article.article_img_url} alt={article.title} />
      <h6>Written by {article.author}</h6>
      <h6>Created: {article.created_at}</h6>
      <p>{article.body}</p>
      
    </section>
  );
};
export default SingleArticle;
