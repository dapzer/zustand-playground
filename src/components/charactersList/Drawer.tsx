import React, { FC } from 'react';
import { useCharacterStore } from '@/store/charactersStore';
import { CharacterCard } from '@/components/characterCard/Drawer';

interface Props {

}

export const CharactersList: FC<Props> = () => {
  const characters = useCharacterStore((state) => state.characters);
  const deleteChar = useCharacterStore((state) => state.deleteChar);

  console.log(`render`);

  return (
    <ul className={"row"}>
      {characters?.map((el) => (
        <li key={el.id} onClick={() => deleteChar(el.id)}>
          <CharacterCard {...el} />
        </li>
      ))}
    </ul>
  );
};
