import { create } from 'zustand';
import { Character } from '@/types/Character';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { getAll } from '@/api/charactersApi';

export module CharactersStore {
  export interface Data {
    characters: Character.RootObject[];
  }

  export interface Actions {
    getCharacters: () => void;
    deleteChar: (id: number) => void;
    updateChar: (id: number) => void;
  }

  export type RootObject = Actions & Data
}

const initialData: CharactersStore.Data = {
  characters: [],
};

export const useCharacterStore = create<CharactersStore.RootObject>()(immer(devtools(
  (set, get, store) => ({
    ...initialData,

    updateChar: (id: number) => set(() => {
      return ({ characters: get().characters.filter((el) => el.id !== id) });
    }),

    deleteChar: (id: number) => {
      set((state) => {
        state.characters = get().characters.filter((el) => el.id !== id);
      }, false, 'characters/delete');
    },

    getCharacters: () => {
     getAll().then((data) => {
       set((state) => {
         state.characters = data.results;
       }, false, 'characters/getAll');
     })
    },
  }), { name: 'characters' })));
