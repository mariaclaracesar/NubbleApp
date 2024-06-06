import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NQ.4BwfrSDqG5WmpJ2NBf3Gto1hVH2Rddi571OQtFoPK7tkB96R_Vh_ZuxzdipQ',
  },
});
