import {
  ADD_TO_CART,
  CREATE_CART,
  PRODUCT_TO_CART,
  SET_AUTH,
  SET_CATEGORIES,
  SET_COLOR,
  SET_COLOR_FILTER,
  SET_GENEROS,
  SET_GENEROS_FILTER,
  SET_MARCAS,
  SET_MARCA_FILTER,
  SET_PANTALONES,
  SET_PRODUCTS,
  SET_PRODUCTS_FILTER_BY_GENERO,
  SET_PRODUCT_FILTER_BY_SEARCH,
  SET_SORT,
  SET_USER,
  SET_ZAPATILLAS,
  SET_ZAPATILLAS_COPY,
  SET_ZAPATILLAS_DETAILS,
} from "../action/types";

const initialState = {
  products: [],
  productsCopy: [],
  productsPrueba: [],
  categories: [],
  zapatillas: [],
  zapatillasCopy: [],
  zapatillasCopy2: [],
  zapatillasDetail: [],
  marcas: [],
  converse: [],
  generos: [],
  colors: [],
  user: [],
  cart: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsCopy: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_ZAPATILLAS:
      return {
        ...state,
        zapatillas: action.payload,
        zapatillasCopy: action.payload,
      };
    case SET_ZAPATILLAS_COPY:
      return {
        ...state,
        zapatillas: action.payload,
      };
    case SET_ZAPATILLAS_DETAILS:
      return {
        ...state,
        zapatillasDetail: action.payload,
      };
    case SET_MARCAS:
      return {
        ...state,
        marcas: action.payload,
      };
    case SET_MARCA_FILTER:
      const rta = [];
      const rta1 = [];
      const rta2 = [];
      const cbMarca = action.payload;
      const cbColor = action.payload2;
      if (cbMarca.length === 0 && cbColor.length === 0) {
        return { ...state, zapatillas: state.zapatillasCopy };
      }
      if (cbColor.length === 0) {
        state.zapatillasCopy.map((item) => {
          cbMarca.map((id) => {
            if (id.toString() === item.marcaId.toString()) {
              rta.push(item);
            }
          });
        });
        return { ...state, zapatillas: rta };
      }
      if (cbMarca.length === 0) {
        state.zapatillasCopy.map((item) => {
          cbColor.map((id) => {
            if (id.toString() === item.colorId.toString()) {
              rta.push(item);
            }
          });
        });
        return { ...state, zapatillas: rta };
      }
      if (cbColor.length > 0) {
        state.zapatillasCopy.map((item) => {
          cbMarca.map((id) => {
            if (id.toString() === item.marcaId.toString()) {
              rta1.push(item);
            }
          });
        });
        rta1.map((item) => {
          cbColor.map((id) => {
            if (id.toString() === item.colorId.toString()) {
              rta2.push(item);
            }
          });
        });
        return { ...state, zapatillas: rta2 };
      }
    // }
    case SET_COLOR_FILTER:
      const rtas = [];
      const rtass = [];
      const rta1s = [];
      const rta2s = [];
      const cbColors = action.payload;
      const cbMarcas = action.payload2;
      if (cbMarcas.length === 0 && cbColors.length === 0) {
        return { ...state, zapatillas: state.zapatillasCopy };
      }
      if (cbMarcas.length === 0) {
        state.zapatillasCopy.map((item) => {
          cbColors.map((id) => {
            if (id.toString() === item.colorId.toString()) {
              rtas.push(item);
            }
          });
        });
        return { ...state, zapatillas: rtas };
      }
      if (cbColors.length === 0) {
        state.zapatillasCopy.map((item) => {
          cbMarcas.map((id) => {
            if (id.toString() === item.marcaId.toString()) {
              rtass.push(item);
            }
          });
        });
        return { ...state, zapatillas: rtass };
      }
      if (cbMarcas.length > 0) {
        state.zapatillasCopy.map((item) => {
          cbColors.map((id) => {
            if (id.toString() === item.colorId.toString()) {
              rta1s.push(item);
            }
          });
        });

        rta1s.map((item) => {
          cbMarcas.map((id) => {
            if (id.toString() === item.marcaId.toString()) {
              rta2s.push(item);
            }
          });
        });
        return { ...state, zapatillas: rta2s };
      }
    case SET_COLOR:
      return { ...state, colors: action.payload };

    case SET_SORT:
      if (action.payload === "ascendente") {
        const ascendente = state.zapatillas.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        return { ...state, zapatillas: ascendente };
      } else if (action.payload === "descendente") {
        const descendente = state.zapatillas.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
        return { ...state, zapatillas: descendente };
      } else if (action.payload === "precioAlto") {
        const precioAlto = state.zapatillas.sort((a, b) => {
          if (a.price < b.price) return 1;
          if (a.price > b.price) return -1;
          return 0;
        });
        return { ...state, zapatillas: precioAlto };
      } else if (action.payload === "precioBajo") {
        const precioBajo = state.zapatillas.sort((a, b) => {
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          return 0;
        });
        return { ...state, zapatillas: precioBajo };
      }
    case SET_GENEROS:
      return {
        ...state,
        generos: action.payload,
      };
    case PRODUCT_TO_CART:
      const newCart = initialState.cart;
      newCart.push(action.payload);
      return {
        ...state,
        cart: newCart,
      };
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_PRODUCTS_FILTER_BY_GENERO:
      const productsGenero = [];
      state.zapatillasCopy.map((item) => {
        if (item.generoId.toString() === action.payload.toString()) {
          productsGenero.push(item);
        }
      });
      return {
        ...state,
        zapatillas: productsGenero,
      };
    default:
      return state;
  }
};
