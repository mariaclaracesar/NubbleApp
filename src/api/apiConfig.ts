import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Nw.IYwKmcu1ryWAGFheouysDmHlD0XaAUoSlvla_gxKMyVmIP16IqaokikT7el4',
  },
});
