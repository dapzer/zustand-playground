import ky from 'ky';

export const httpClient = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL
})
