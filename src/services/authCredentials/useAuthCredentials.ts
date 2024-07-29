import {create} from 'zustand';

import {AuthCredentialsService} from './authCredentialsType';

export function useAuthCredentials(): AuthCredentialsService {
  return useAuthCredentialsZustand();
}

const useAuthCredentialsZustand = create<AuthCredentialsService>(set => ({
  authCredentials: null,
  isLoading: false,
  saveCredentials: async ac => set({authCredentials: ac}),
  removeCredentials: async () => set({authCredentials: null}),
}));
