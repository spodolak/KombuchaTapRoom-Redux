export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_KEG':
    const { name, brand, price, flavor, id } = action;
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        price: price,
        flavor: flavor,
        id: id
      }
    });
  case 'DELETE_KEG':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};