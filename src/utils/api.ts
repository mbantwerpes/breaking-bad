import type { CharacterFromAPI } from '../types';

export async function getCharacters(
  nameFilter?: string
): Promise<CharacterFromAPI[]> {
  const response = await fetch(
    `https://www.breakingbadapi.com/api/characters?name=${
      nameFilter ? nameFilter : ''
    }`
  );
  const data: CharacterFromAPI[] = await response.json();

  return data;
}
