import { matchUserAndAuthor, formatDate } from '../api';
import Toast from 'react-bootstrap/Toast';
import '../Styles/comments.css';

const Comments = ({users, comments, commentLoading}) => {

    return (commentLoading ? (
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
                <Toast.Header closeButton={false} >
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
    )
    )
  }

export default Comments;
