import { ApiResponse } from '../types';

export async function fetchCharacters(params?: { 
  status?: string; 
  gender?: string; 
}): Promise<ApiResponse> {
  const searchParams = new URLSearchParams();
  
  if (params?.status) {
    searchParams.append('status', params.status);
  }
  if (params?.gender) {
    searchParams.append('gender', params.gender);
  }

  const response = await fetch(
    `https://rickandmortyapi.com/api/character?${searchParams.toString()}`,
    { cache: 'no-store' } // Bu satırı ekledik
  );

  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }

  return response.json();
}
