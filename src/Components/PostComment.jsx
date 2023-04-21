import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Styles/articles.css';
import { postComment } from '../api';
import { useContext, useState } from 'react';
import { UserContext } from '../Contexts/UserLogin';

function PostComment({ article_id, setComments }) {
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {user, setUser, loggedIn} = useContext(UserContext);




  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newComment = {
      username: user,
      body: comment,
      votes: 0,
    };
    postComment(newComment, article_id).then((postedComment) => {
      setSubmitted(true);
      setComment('');
      return setComments((currentComments) => [...currentComments, postedComment]);
    }).catch((err) => {
      console.log(err);
      setError(true);
    })
  };

  return (
    <section className='post_comment'>
      {submitted ? (
        <p>Comment Posted</p>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Label htmlFor='comment-body'>Post a Comment</Form.Label>
          <Form.Control
            as='textarea'
            rows={5}
            id='comment-body'
            value={comment}
            required
            aria-describedby='comment-text-block'
            className='comment-body'
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          {error && !loggedIn ? (
            <p>Log In To Post A Comment</p>
          ) : null}
          {error && loggedIn ? (
            <p>Error Posting Comment. Please Try Again Later</p>
          ) : null}
          <Button className='submit' variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      )}
    </section>
  );
}

export default PostComment;
