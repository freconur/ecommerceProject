import {
  ADD_TO_CART,
  CLEAN_CART,
  CREATE_CART,
  CREATE_ORDER,
  FILTER_CART_ID,
  GOOGLE_SIGN_IN_FAIL,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  SET_AMOUNT_CART,
  SET_AUTH,
  SET_CART,
  SET_CART_ID,
  SET_CURRENT_ID,
  SET_CURRENT_USER,
  SET_USER,
  SET_USER_DB,
  SET_USER_ID,
  SET_USUARIO_ACTUAL,
} from "../action/types";

const initialState = {
  loading: false,
  currentUser: [],
  currentUserDb: [],
  user: [],
  error: null,
  usersDb: [],
  amountCart: 0,
  cart: [],
  userId: [],
  currentId: null,
  cartDetail: [],
  prueba: null,
  kaka: [],
  orderId: null,
  navbarId: null,
  userIdCurrent: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN_START:
      return {
        ...state,
        loading: true,
      };
    case GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: true,
        currentUser: action.payload,
      };
    case GOOGLE_SIGN_IN_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        user: action.payload,
      };
    case SET_USER_DB:
      return {
        ...state,
        usersDb: action.payload,
      };
    case SET_CURRENT_USER:
      const payload = { ...action.payload };
      // const rta = []
      let rta = null;
      state.cart.map((c) => {
        if (c.userId === payload.id) {
          // rta.push(c.id)
          rta = c.id;
        }
      });
      //aqui estoy filtrando el id del cart 24
      return {
        ...state,
        navbarId: payload.id,
        currentUserDb: rta,
      };
    case SET_USUARIO_ACTUAL:
      let findId;
      state.usersDb.find((user) => {
        if (user.idGoogle === state.currentUser.uid) {
          findId = user.id;
        }
      });
      return { ...state, userIdCurrent: findId };
    case SET_CURRENT_ID:
      if (action.payload !== null || action.payload !== undefined) {
        let idValue;
        Object.keys(action.payload).map((key) => {
          if (key === "id") {
            idValue = action.payload[key];
          }
        });
        return {
          ...state,
          currentId: idValue,
        };
      }
    case SET_AUTH:
      return { ...state };
    case ADD_TO_CART:
      return { ...state, cart: action.payload };
    case CREATE_CART:
      return { ...state, cart: action.payload };
    case SET_USER_ID:
      const user = state.usersDb.find(
        (userDb) => userDb.idGoogle === action.payload
      );
      return { ...state, userId: user.id };
    case SET_CART:
      return { ...state, cart: action.payload };
    case SET_CART_ID:
      const infoCart = { ...action.payload.items };
      const productsCart = [];
      Object.keys(infoCart).map((key) => {
        const value = infoCart[key];
        productsCart.push(value);
      });
      return { ...state, cartDetail: action.payload, kaka: productsCart };
    case FILTER_CART_ID:
      return { ...state };
    case SET_AMOUNT_CART:
      return {
        ...state,
        amountCart: action.payload,
      };
    case CREATE_ORDER:
      return {
        ...state,
        orderId: action.payload,
      };
    case CLEAN_CART:
      return {
        ...state,
        orderId: null,
      };
    default:
      return state;
  }
};
