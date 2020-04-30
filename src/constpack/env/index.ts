type ServerURL = {
  production: string;
  beta: string;
  development: string;
};

const API_INFO_URL: ServerURL = {
  production: '',
  beta: '',
  development: 'http://dummy.restapiexample.com/api/v1',
};

// Server Stage
type Stage = 'production' | 'beta' | 'development';
export const SERVER_STAGE = process.env.NODE_ENV as Stage;

// Server URL Info
export const API_BASE_URL: string = API_INFO_URL[SERVER_STAGE];
export const API_REQUEST_TIMEOUT: number = 20000;
export const OAUTH_BASIC_KEY = '';
