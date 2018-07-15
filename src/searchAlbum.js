import { spotify } from './search';

global.fetch = require('node-fetch');

export const album = spotify.searchAlbums;

export function getAlbum(query) {
  return album(query)
    .then(console.log);
}
