import kegThumbnailListReducer from '../../reducers/keg-thumbnail-list-reducer';

describe('kegThumbnailListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegThumbnailListReducer({}, { type: null })).toEqual({});
  });
});