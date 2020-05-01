import kegThumbnailListReducer from '../../reducers/keg-thumbnail-list-reducer';

describe('kegThumbnailListReducer', () => {

  let action;
  const kegData = {
    name: "Strawberry",
    brand: "Topsy Turvy",
    price: "$.99",
    flavor: "Strawberry",
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegThumbnailListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg to masterKegList', () => {
    const { name, brand, price, flavor, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      id: id
    };

    expect(kegThumbnailListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        flavor: flavor,
        id: id
      }
    });
  });

});