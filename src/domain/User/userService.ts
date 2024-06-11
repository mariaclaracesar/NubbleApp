import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {User} from './userTypes';

// Esta função faz uma chamada de API para obter dados do usuário. O resultado é armazenado na constante userAPI
async function getById(id: number): Promise<User> {
  const userAPI = await userApi.getById(id.toString());

  // Passa os dados do  usuário obtidos da API. Esta função converte os dados do usuário para o formato User
  return userAdapter.toUser(userAPI);
}

export const userService = {
  getById,
};
