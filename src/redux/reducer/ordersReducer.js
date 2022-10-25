import {
  FILTER_ALL_ORDERS_BY_USER,
  FILTER_ORDER_BY_USER,
  SET_ORDER,
  SET_ORDER_BY_ID,
  SET_ORDER_BY_ID_UNDELIVERED,
} from "../action/types";

const initialState = {
  delivered: null,
  undelivered: null,
  orders: [],
  ordersCopy: [],
  orderDetail: [],
  orderDetailDelivered: null,
  orderDetailUndelivered: null,
  orderFromUser: null,
  orderUndeliveredUser: null,
  orderDeliveredUser: null,
  onlyOrderFromUser: null,
  ordersUndelivered: null,
  ordersDelivered: null,
  fiveOrderOnlyDelivereds: null
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      const filterDelivered = [];
      const filterUndelivered = [];
      action.payload.map((order) => {
        if (order.delivered == 1) {
          filterDelivered.push(order);
        } else {
          filterUndelivered.push(order);
        }
      });
      return {
        ...state,
        orders: action.payload,
        ordersCopy: action.payload,
        delivered: filterDelivered,
        undelivered: filterUndelivered,
      };
    case SET_ORDER_BY_ID:

      return {
        ...state,
        orderDetailDelivered: action.payload,
      };
    case SET_ORDER_BY_ID_UNDELIVERED:
      return {
        ...state,
        orderDetailUndelivered: action.payload,
        orderDetail: action.payload
      };
    case FILTER_ORDER_BY_USER:
      const orderByUser = []
      state.ordersCopy.map(order => {
        if(order.userId === action.payload) {
          orderByUser.push(order)
        }
      })
      const orderDeliveredUser = []
      const orderUndeliveredUser = []
      orderByUser.map(item => {
        if(item.delivered == 1) {
          orderDeliveredUser.push(item)
        } else {
          orderUndeliveredUser.push(item)
        }
      })
      return {
        ...state,
        orderFromUser:orderByUser,
        orderUndeliveredUser: orderUndeliveredUser,
        orderDeliveredUser:orderDeliveredUser
      };
      case FILTER_ALL_ORDERS_BY_USER:
      const ordersDelivered = []
      const ordersUndelivered = []
      const fiveOrderOnlyDelivered = []
      const onlyOrders =  action.payload.orders;
      onlyOrders.map(order => {
        if(order.delivered == 1){
          ordersDelivered.push(order)
        }else {
          ordersUndelivered.push(order)
        }
      })
      let num = 0
      ordersDelivered.map(item => {
        num = num + 1;
        if(num < 6) {
          fiveOrderOnlyDelivered.push(item)
        }
      })
      return {
          ...state,
          onlyOrderFromUser: onlyOrders,
          ordersDelivered:ordersDelivered,
          ordersUndelivered:ordersUndelivered,
          fiveOrderOnlyDelivereds: fiveOrderOnlyDelivered
        }

    default:
      return state;
  }
};
