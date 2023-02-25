import SetCharacters from '@/components/SetCharacters';
import {CharactersList} from '@/components/charactersList/Drawer';
import { useAuthStore } from '@/store/authStore';
import { useEffect } from 'react';
import { useCharacterStore } from '@/store/charactersStore';

export default function Home() {
  const isAuth = useAuthStore(state => state.isAuth)
  const getCharacters = useCharacterStore(state => state.getCharacters)

  useEffect(() => {
    if (!isAuth) return
    getCharacters()
  }, [isAuth])

  return (
    <>
      <CharactersList />
      <SetCharacters />
    </>
  )
}
