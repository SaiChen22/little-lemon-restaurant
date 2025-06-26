import { useState } from 'react';
import wait from '../utils/wait';

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (_url, data) => {
    setLoading(true);
    try {
      await wait(500);
      setResponse({
        type: 'success',
        message: `Thanks for your submission!`,
        data
      });
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong!'
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
