import { createStore } from 'redux';

// Initial Store === Initial State
const initialState = {
  groceries: [
    {
      item: 'Milk',
      id: 0,
    },
    {
      item: 'Eggs',
      id: 1,
    },
    {
      item: 'Gains',
      id: 2,
    }
  ]
};

function groceryStore(state = initialState, action) {
  switch(action.type){
    case 'ADD_ITEM':
      return Object.assign({}, state, {
        groceries: state.groceries.concat([{
          item: action.item,
          id: action.id,
        }]),
      });
    case 'REMOVE_ITEM':
      return Object.assign({}, state, {
        groceries: state.groceries.filter((item) => item.id !== action.id)
      })
    default:
      return state;
  }
}

export default createStore(groceryStore);
