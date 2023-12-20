// В файле, например, actions/common.js
export const deleteOrder = (orderId) => ({
    type: 'DELETE_ORDER',
    payload: orderId,
  });
  