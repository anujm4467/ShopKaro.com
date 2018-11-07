/** @format */

const addToCart = book => {
  return {
    type: 'ADD_TO_CART',
    payload: book,
  };
};

export default addToCart;
