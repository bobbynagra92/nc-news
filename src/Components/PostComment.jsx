import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import '../Styles/comments.css';
import { postComment } from '../api';
import { useContext, useState } from 'react';
import { UserContext } from '../Contexts/UserLogin';
import { useNavigate } from 'react-router';

function PostComment({ article_id, setComments }) {
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {user, loggedIn} = useContext(UserContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  }

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    const newComment = {
      username: user.username,
      body: comment,
      votes: 0,
    };

    return postComment(newComment, article_id).then((postedComment) => {
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
            <>
              <Modal show={handleShow} onHide={handleClose}>
                <Modal.Header closeButton onClick={() => {
                  handleClose();
                  console.log('clicked')}}>
                  <Modal.Title>Log In To Continue</Modal.Title>
                </Modal.Header>
                <Modal.Body>You must Log In to post a comment.</Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={handleClick}>
                      Click Here Log In
                    </Button>
                </Modal.Footer>
              </Modal>
            </>
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
