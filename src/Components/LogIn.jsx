import Button from 'react-bootstrap/Button';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../Contexts/UserLogin';
import { fetchUsers, fetchUserByUsername } from '../api';
import { Form } from 'react-bootstrap';
import '../Styles/login.css'

const LogIn = () => {
  const [users, setUsers] = useState([]);
  const { user, setUser, loggedIn, setLoggedIn } = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState('')
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers()
      .then((users) => {
        setUsers(users);})
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
  }, [user, loggedIn])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserByUsername(selectedOption).then((user) => {
      setUser(user);
      setLoggedIn(true);
      navigate(-1);
    })
  }
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };


return (
  <section className='login'>
  <h1>Log In</h1>
      <Form onSubmit={handleSubmit}>
        <p>Select a username below to complete log in:</p>
          <Form.Select className="login-form" aria-label='Log In Form' value={selectedOption} onChange={handleDropdownChange} required>
            <option value='' disabled>Select a Guest username</option>
            {users.map((user) => {
              return <option key={user.username} value={user.username}>{user.username}</option>
            })}
          </Form.Select>
          <Button className='login-button' type='submit'>
            Log In
          </Button>
      </Form>
  </section>
);
};

export default LogIn;
