import {User, UserAPI} from './userTypes';

// Define uma função de adaptação para converter um objeto UserAPI em um objeto User.
function toUser(userAPI: UserAPI): User {
  return {
    id: userAPI.id,
    firstName: userAPI.fist_name,
    lastName: userAPI.last_name,
    username: userAPI.username,
    email: userAPI.email,
    profileUrl: userAPI.profile_url,
    isOnline: userAPI.is_online,
    fullName: userAPI.full_name,
  };
}

export const userAdapter = {
  toUser,
};
