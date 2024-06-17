import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../userService';

export function useUserGetById(id: number) {
  // const [user, setUser] = useState<User>();
  // const [error, setError] = useState<boolean | null>(null);
  // const [loading, setLoading] = useState(false);

  const {data, isLoading, isError} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
  });

  // // Essa função é responsável por chamar o método getById do userService para buscar um usuário pelo id fornecido.
  // const getUserById = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     const _user = await userService.getById(id);
  //     setUser(_user);
  //   } catch (er) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [id]);

  // useEffect(() => {
  //   getUserById();
  // }, [getUserById]);

  return {
    user: data,
    isLoading,
    isError,
  };
}
