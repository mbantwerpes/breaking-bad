export type CharacterFromAPI = {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: 'Alive' | 'Deceased' | 'Unknown' | 'Presumed dead';
  appearance: number[];
  nickname: string;
  portrayed: string;
};
