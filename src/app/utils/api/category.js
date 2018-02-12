import { api, headers } from './config'

export const getAllCategory = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);
