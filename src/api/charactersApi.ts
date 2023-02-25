import { httpClient } from '@/api/client';
import { Character } from '@/types/Character';
import { HTTPError, ResponsePromise } from 'ky';

export const getResponse = async <T = unknown>(request: ResponsePromise): Promise<T> => {
  try {
    return await request.json<T>();
  } catch (err) {
    const error = err as HTTPError;
    throw error.message;
  }
};

export const getAll = async () => {
  return await getResponse<Character.Response>(httpClient.get('character'));
};
