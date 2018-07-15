export function search(searchQuery, ...types) {
  const query = String(searchQuery).toLowerCase();
  const type = String(types.join(',')).toLowerCase();
  return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then(data => data.json());
}

export const spotify = {
  search: (query, ...types) => search(query, types.join(',')),
  searchAlbums: query => search(query, 'album'),
  searchArtists: query => search(query, 'artist'),
  searchTracks: query => search(query, 'track'),
};
