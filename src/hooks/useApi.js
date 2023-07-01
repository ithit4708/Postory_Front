import { useEffect, useState } from 'react';
import { api } from '../api';

export function useApiGet(url, initialtype) {
  //dataFormat은 {} or []가 되어야함
  const [data, setData] = useState(initialtype);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    // const abortController = new AbortController();
    // const signal = abortController.signal;
    // api.get(url)의 두번째 파라미터로 {signal} 추가

    (async () => {
      try {
        const res = await api.get(url);
        if (isMounted) {
          console.log('get 성공');
          setData(res);
        }
      } catch (err) {
        if (isMounted) {
          console.log('get 실패');
          console.log(err);
          setError(err);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      isMounted = false;
      // abortController.abort();
    };
  }, [url]);

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
