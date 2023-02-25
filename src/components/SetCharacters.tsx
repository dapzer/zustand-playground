import React, { FC } from 'react';
import { useCharacterStore } from '@/store/charactersStore';
import { shallow } from 'zustand/shallow';

interface Props {

}

const SetCharacters: FC<Props> = () => {
  const { getCharacters } = useCharacterStore((state) => ({
    getCharacters: state.getCharacters
  }), shallow);

  return (
    <div>
      <button onClick={getCharacters}>Set characters</button>
    </div>
  );
};

export default SetCharacters;
