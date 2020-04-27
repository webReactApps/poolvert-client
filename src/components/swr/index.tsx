import useSWR, { keyInterface, ConfigInterface } from 'swr';
import fetch from 'unfetch';
import { SWR, UNFETCH, SECURITY, API_END_POINT } from '../../config/app-config';

const checkStatus = (response: Response) => {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);
    Object.assign(error, { response });
    return Promise.reject(error);
  }
}

const fetcher = (url: string, fetcherOptions?: RequestInit) => {

  const options = Object.assign({}, UNFETCH);
  if (fetcherOptions) {
    const { headers, ...otherOptions } = fetcherOptions;
    Object.assign(options, otherOptions);
    if (headers) {
      options.headers = Object.assign({}, UNFETCH.headers, headers);
    }
  }

  const token = localStorage.getItem('token');
  if (token) {
    options.headers = Object.assign({}, UNFETCH.headers, {
      [SECURITY.tokenKey.header]: SECURITY.tokenValuePrefix + token
    });
  }

  const urlHasScheme = new RegExp('https?:*', 'ig').test(url);

  return fetch(urlHasScheme ? url : (API_END_POINT + url), options).then(checkStatus).then(r => r.json());

};

const customSwr = (
  key: keyInterface,
  fetcherOptions?: RequestInit,
  fn?: (...args: any) => any | Promise<any>,
  config?: ConfigInterface
) => useSWR(key, url => fn ? fn(url) : fetcher(url, fetcherOptions), Object.assign({}, SWR, config));

export default customSwr;
export { checkStatus, fetcher };
