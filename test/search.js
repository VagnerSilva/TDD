
import { expect, use } from 'chai';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonPromise from 'sinon-stub-promise';
import { spotify } from '../src/search';

use(sinonChai);
sinonPromise(sinon);

let fetchedStub;
let promise;
global.fetch = require('node-fetch');


describe('Spotify', () => {
  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch').returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke test', () => {
    it('Should exist the search, searchAlbums, searchArtists, searchTracks methods and should to be a function', () => {
      const spot = ['search', 'searchAlbums', 'searchArtists', 'searchTracks'];
      Object.keys(spotify).forEach((value, index) => {
        expect(value).to.include(`${spot[index]}`);
        expect(spotify[value]).to.be.a('function');
      });
    });
  });

  describe('Generic Search', () => {
    it('Should call fetch function', () => {
      const searchTest = spotify.search;
      searchTest();
      expect(fetchedStub).to.have.been.calledOn;
    });

    it('Should receive the correct url to fetch', () => {
      spotify.search('Nirvana', 'artist');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=nirvana&type=artist');

      spotify.search('Lennon', 'album');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=lennon&type=album');

      spotify.search('Lennon', 'artist', 'album');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=lennon&type=artist,album');
    });

    it('Should resolved json data', () => {
      const body = { body: 'json' };
      fetchedStub.resolves(body);
      const album = spotify.search('nirvana', 'album');
      expect(album.resolveValue).to.be.eql(body);
    });
  });

  context('Search Suite', () => {
    it('Should to be correct url', () => {
      Object.keys(spotify).forEach((value) => {
        if (value !== 'search') {
          spotify[value]('nirvana');
          const type = value
            .split('search')
            .join(',')
            .slice(1)
            .slice(0, -1) // s remove
            .toLowerCase();
          expect(fetchedStub).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=nirvana&type=${type}`);
        }
      });
    });
  });
});
