import { useState, useEffect } from 'react';
import '../Styles/articles.css';
import { fetchArticle, fetchArticleComments, fetchUserByName, fetchUsers } from '../api';
import Loading from './Loading';
import { useParams } from 'react-router';
import  Toast  from 'react-bootstrap/Toast';
import { ToastHeader } from 'react-bootstrap';

const SingleArticle = () => {
  const {article_id} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState(null);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchArticle(article_id)
      .then((article) => {
        setIsLoading(false);
        fetchArticleComments(article_id).then(comments => setComments(comments));
        return setArticle(article)})
        .catch((err) => console.log(err));
      }, [setArticle]);
      

  if (isLoading) { return <Loading isLoading={isLoading} />;}

  return (
    <section className='single_article' key={article_id}>
      <h1>{article.title}</h1>
      <img src={article.article_img_url} alt={article.title} />
      <h6>Written by {article.author}</h6>
      <h6>Created: {article.created_at}</h6>
      <p id='article-body'>{article.body}</p>
      <h3>Comments 💬</h3>
      <div className='comments'>
      {comments.map((comment) => {
        return (
          <Toast key={comment.comment_id} className='comment'>
            <Toast.Header closeButton={false}>
              <img
                src={'holder.js/20x20?text=%20'}
                className='rounded me-2'
                alt={`${comment.author} user avatar`}
              />
              <h6>{comment.author}</h6>
              <small>{comment.created_at}</small>
            </Toast.Header>
            <Toast.Body>{comment.body}</Toast.Body>
            <p id='comment-votes'>Votes: {comment.votes}</p>
          </Toast>
        );
      })}
      </div>
    </section>
  );
};
export default SingleArticle;
