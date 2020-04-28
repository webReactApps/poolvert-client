import useSWR, * as swrMethods from 'swr';
import fetch from 'unfetch';
import { instance as Auth } from "../../lib/auth";
import { instance as Helpers } from "../../lib/helpers";
import { SWR, UNFETCH, API_END_POINT } from '../../config/app-config';
import { IProps, TFetcher } from './type';

const checkStatus = (response: Response) => {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);
    Object.assign(error, { response });
    return Promise.reject(error);
  }
};

const fetcher: TFetcher = (url, fetcherOptions) => {
  const token = Auth.getToken();
  const options = Object.assign({}, UNFETCH);
  if (fetcherOptions) {
    const { headers, ...otherOptions } = fetcherOptions;
    Object.assign(options, otherOptions, {
      headers: Object.assign({}, UNFETCH.headers, headers || {})
    });
  }
  Object.assign(options.headers, Auth.createTokenHeaderObject(token));
  return fetch(Helpers.urlHasScheme(url) ? url : (API_END_POINT + url), options).then(checkStatus).then(r => r.json());
};

const customUseSWR = ({ key, fetcherOptions, fn, config }: IProps) => useSWR(
  key,
  url => fn ? fn(url) : fetcher(url, fetcherOptions),
  Object.assign({}, SWR, config)
);

export default customUseSWR;
export {
  swrMethods,
  checkStatus,
  fetcher
};
