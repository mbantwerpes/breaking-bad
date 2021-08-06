import type { CharacterFromAPI } from '../types';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export async function getCharacters(
  nameFilter?: string
): Promise<CharacterFromAPI[]> {
  const response = await fetch(
    `${baseUrl}characters?name=${nameFilter ? nameFilter : ''}`
  );
  const data: CharacterFromAPI[] = await response.json();

  return data;
}
