const config = {
  apiUrl: 'http://localhost:3000/api/v1',
  entities: {
    books: '/books'
  }
};

axios.defaults.baseURL = config.apiUrl;
axios.defaults.withCredentials = true;

export default config;
