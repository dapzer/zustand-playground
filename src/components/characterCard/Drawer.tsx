import React, { FC } from 'react';
import { Character } from '@/types/Character';
import UiCard from '@/components/card/UiCard';
import { useCharacterStore } from '@/store/charactersStore';

export const CharacterCard: FC<Character.RootObject> = (props) => {
  const deleteChar = useCharacterStore((state) => state.deleteChar)

  return (
    <UiCard link={`/character/${props.id}`} title={props.name} image={props.image}
            date={new Date(props.created).toLocaleDateString()} width={"300px"}>
      <button onClick={() => deleteChar(props.id)}>Delete</button>
    </UiCard>
  );
};
