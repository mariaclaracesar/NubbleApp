import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Ng.vTYifDZsidQWg3aeB_zKpTCe5XrCePHEl1AY-lfegdqBKcza44RRXgmSLlOE',
  },
});
