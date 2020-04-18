import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { API_BASE_URL, API_REQUEST_TIMEOUT, OAUTH_BASIC_KEY } from 'constants/variables';

class Client {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: API_BASE_URL,
      timeout: API_REQUEST_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
        Authorization: OAUTH_BASIC_KEY,
      },
    });
  }

  get<T>(path: string, payload?: any) {
    return this.axios.get<T>(path, payload).then((response: AxiosResponse) => response);
  }

  post(path: string, payload: any, contentType?: string) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (contentType) {
      config.headers['Content-Type'] = contentType;
    }

    return this.axios.post(path, payload, config).then((response: AxiosResponse) => response);
  }

  put(path: string, payload: any) {
    return this.axios.put(path, payload).then((result: AxiosResponse) => result);
  }

  delete(path: string, payload?: any) {
    return this.axios.delete(path, payload).then((result: AxiosResponse) => result);
  }
}

const client = new Client();

export default client;
