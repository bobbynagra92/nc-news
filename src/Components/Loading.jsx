import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';

const Loading = ({ isLoading, setIsLoading }) => {
  if (isLoading) {
    return <div>
      <Spinner animation="grow" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>;
  }
};

export default Loading;
