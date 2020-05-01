import kegThumbnailListReducer from '../../reducers/keg-thumbnail-list-reducer';

describe('kegThumbnailListReducer', () => {

  let action;
  const kegData = {
    1:{
      name: "Strawberry",
      brand: "Topsy Turvy",
      price: "$.99",
      flavor: "Strawberry",
      id: 1
    },
    2:{
      name: "Banana",
      brand: "Turvy Topsy",
      price: "$1.59",
      flavor: "Banana",
      id: 1
    }
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

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegThumbnailListReducer(currentState, action)).toEqual({
      2:{
        name: "Banana",
        brand: "Turvy Topsy",
        price: "$1.59",
        flavor: "Banana",
        id: 1
      }
    });
  });

});