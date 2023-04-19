import { useState, useEffect } from 'react';
import '../Styles/articles.css';
import {
  fetchArticle,
  fetchArticleComments,
  fetchUsers,
  formatDate,
  matchUserAndAuthor,
  updateVotes
} from '../api';
import Loading from './Loading';
import { useParams } from 'react-router';
import Toast from 'react-bootstrap/Toast';

const SingleArticle = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState(null);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentLoading, setCommentLoading] = useState(true);
  const [votes, setVotes] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((users) => {
        setUsers(users);
        return fetchArticle(article_id);
      })
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
        setVotes(article.votes);
        return fetchArticleComments(article_id);
      })
      .then((comments) => {
        setComments(comments);
        setCommentLoading(false);
      })
      .catch((err) => console.log(err));
  }, [article_id, setArticle, setVotes, setComments, setUsers]);

  
  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }
  
  const plus1 = () => {
    return updateVotes(1, article_id).then((updatedArticle) => {
      setVotes(updatedArticle.votes);
      setArticle(updatedArticle);
    })
  }

  const minus1 = () => {
    updateVotes(-1, article_id).then((updatedArticle) => {
      setVotes(updatedArticle.votes);
      setArticle(updatedArticle);
    });
  }
  
  return (
    <main className='single_article' key={article_id}>
      <h1>{article.title}</h1>
      <img src={article.article_img_url} alt={article.title} />
      <h6>Written by {matchUserAndAuthor(article.author, users).name}</h6>
      <h6>Created: {formatDate(article.created_at)}</h6>
      <p id='article-body'>{article.body}</p>
      <h4>Votes: {votes}</h4>
      <div className='voting_buttons'>
        <button onClick={plus1}>Up-Vote 👍</button> <button onClick={minus1}>Down-Vote 👎</button>
      </div>
      {commentLoading ? (
        <p>Loading Comments ...</p>
      ) : comments.length === 0 ? (
        <p>No Comments</p>
      ) : (
        <>
          <h3>Comments 💬</h3>
          <div className='comments'>
            {comments.map((comment) => {
              const { avatar_url } = matchUserAndAuthor(comment.author, users);
              return (
                <Toast key={comment.comment_id} className='comment'>
                  <Toast.Header closeButton={false}>
                    <img
                      src={avatar_url}
                      className='user_avatar'
                      alt={`${comment.author} user avatar`}
                    />
                    <h6>{comment.author}</h6>
                    <small>{formatDate(comment.created_at)}</small>
                  </Toast.Header>
                  <Toast.Body>{comment.body}</Toast.Body>
                  <p id='comment-votes'>Votes: {comment.votes}</p>
                </Toast>
              );
            })}
          </div>
        </>
      )}
    </main>
  );
};
export default SingleArticle;
