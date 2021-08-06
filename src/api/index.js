import axios from 'axios';

export const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com';
// export const KEY = '';


export async function getUsers() {
    try {
      const { data } = await axios.get(`${ BASE_URL }/users`);
      return data;
    } catch (error) {
      throw error;
    }
  }