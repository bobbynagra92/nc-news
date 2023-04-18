import Spinner from 'react-bootstrap/Spinner';
import '../Styles/loading.css'

const Loading = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className='loading'>
        <Spinner animation='grow' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    );
  }
};

export default Loading;
