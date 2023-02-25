import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export declare namespace AuthStore {
  export interface Data {
    token: string;
    userName: string;
    userId: string;
    isAuth: boolean
  }

  export interface Actions {
    login: (token: string) => Promise<void>;
  }

  export type RootObject = Actions & Data
}

const initialData: AuthStore.Data = {
  token: '',
  userId: '',
  userName: '',
  isAuth: false
};

export const useAuthStore = create<AuthStore.RootObject>()(immer(devtools(
  (set, get, store) => ({
    ...initialData,

    login: async (token) => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          set((state) => {
            state.token = token;
            state.userId = 'dapzer';
            state.userName = 'Danila';
            state.isAuth = true
          }, false, 'auth/login');
          resolve(true);
        }, 2000);
      });

    },
  }), { name: 'auth' })));

