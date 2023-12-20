// В файле, например, reducers/common.js
const commonReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DELETE_ORDER':
        return {
          ...state,
          orders: state.orders.filter(order => order.id !== action.payload),
        };
      // Другие случаи...
      default:
        return state;
    }
  };
  