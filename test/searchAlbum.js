
import { expect, use } from 'chai';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonPromise from 'sinon-stub-promise';
import { getAlbum } from '../src/searchAlbum';

let fetchStub;

use(sinonChai);
sinonPromise(sinon);

describe('Album', () => {
  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch').returnsPromise();
  });

  afterEach(() => {
    fetchStub.restore();
  });

  describe('Should return album', () => {
    getAlbum('nirvana');
    expect(fetchStub).to.have.been.calledOn;
  });
});
