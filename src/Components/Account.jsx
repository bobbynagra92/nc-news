import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../Contexts/UserLogin';
import '../Styles/account.css';

const Account = () => {
  const { user, setUser, setLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

   const handleSubmit = (e) => {
     e.preventDefault();
       setUser({});
       setLoggedIn(false);
       navigate(-1);
       localStorage.clear('user', true);
       localStorage.clear('loggedIn', true);
   };

   return (
    <>
    
      <h1>Account Details</h1>
     <section className='account'>
       <img className='avatar' src={user.avatar_url} alt={`${user.name} avatar`} />
       <div className='account-details'>
         <h6>
           <strong>Name: </strong>
           {user.name}
         </h6>
         <h6><strong>Username: </strong>{user.username}</h6>
         <h6><strong>Profile Picture URL: </strong>{user.avatar_url}</h6>
       </div>
     </section>
       <Button variant='primary' className='submit' type='submit' onClick={handleSubmit}>
        Log Out
       </Button>
    </>
   );
};

export default Account;
