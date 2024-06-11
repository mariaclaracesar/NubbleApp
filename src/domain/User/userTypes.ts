// Interface de como nós usamos no app
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  profileUrl: string;
  isOnline: boolean;
  fullName: string;
}

// Interface como a API retorna
export interface UserAPI {
  id: number;
  fist_name: string;
  last_name: string;
  username: string;
  email: string;
  profile_url: string;
  is_online: boolean;
  full_name: string;
}
