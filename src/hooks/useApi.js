import { useState } from 'react';
import { api } from '../api';
import { useEffect } from 'react';

export function useApiGet(url) {
  //dataFormat은 {} or []가 되어야함
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get(url);
        console.log('get 성공', res);
        setData(res.data);
      } catch (err) {
        console.log('get 실패', err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []); // 의존성 배열이 비어있음

  return { data, isLoading, error };
}

export function useApiPost(url) {
  const [isPosting, setIsPosting] = useState(false);
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);

  const postData = async (reqData) => {
    setIsPosting(true);
    setError(null);
    setRes(null);

    try {
      const res = await api.post(url, reqData);
      console.log('post 성공');
      console.log(res);
      setRes(res);
    } catch (err) {
      console.log('post 실패');
      console.log(err);
      if (err.code === 'ERR_NETWORK') {
        setError({
          status: err.code,
          errMsg: err.message,
        });
      } else setError(err.response.data);
    } finally {
      setIsPosting(false);
    }
  };

  return { isPosting, postData, error, res, setError };
}
