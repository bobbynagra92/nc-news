import { useState, useEffect } from 'react';
import '../Styles/articles.css';
import {
  fetchArticle,
  fetchUsers,
  fetchArticleComments,
  formatDate,
  matchUserAndAuthor,
  updateVotes
} from '../api';
import Loading from './Loading';
import { useParams } from 'react-router';
import PostComment from './PostComment';
import Comments from './Comments';

const SingleArticle = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState(null);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentLoading, setCommentLoading] = useState(true);
  const [votes, setVotes] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(null);

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
    setVotes(votes + 1);
    return updateVotes(1, article_id).then((updatedArticle) => {
      setArticle(updatedArticle);
      setDisabled(true);
    }).catch((err) => {
      setVotes(votes);
      setError(true);
    });
  }

  const minus1 = () => {
    setVotes(votes - 1);
    updateVotes(-1, article_id).then((updatedArticle) => {
      setArticle(updatedArticle);
      setDisabled(true);
    }).catch((err) => {
      setVotes(votes);
      setError(true);
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
        <button onClick={plus1} disabled={disabled}>
          Up-Vote 👍
        </button>{' '}
        <button onClick={minus1} disabled={disabled}>
          Down-Vote 👎
        </button>
        {error ? (
          <p className='vote_error'>
            Something went wrong, please try again later
          </p>
        ) : null}
      </div>
      <Comments users={users} comments={comments} commentLoading={commentLoading}/>
      <PostComment article_id={article_id} setComments={setComments}/>
    </main>
  );
};
export default SingleArticle;
