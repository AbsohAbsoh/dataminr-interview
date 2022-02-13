import {useEffect, useState} from 'react';

type ServiceResponse<T> =
  | {
      response?: T;
      status: 'complete';
    }
  | {
      status: 'loading';
    }
  | {
      error?: Error;
      status: 'error';
    };

export const useService = <ResponseType>(
  url: string,
  params: Record<string, any>,
): ServiceResponse<ResponseType> => {
  const [response, setResponse] = useState<ServiceResponse<ResponseType>>({
    status: 'loading',
  });

  useEffect(() => {
    const body = params ? JSON.stringify(params) : null;
    fetch(url, {body})
      .then(apiResponse => {
        apiResponse.json().then((r: ResponseType) => {
          setResponse({
            response: r,
            status: 'complete',
          });
        });
      })
      .catch((err: Error) => {
        setResponse({
          error: err,
          status: 'error',
        });
      });
  }, [url, params]);

  return response;
};
