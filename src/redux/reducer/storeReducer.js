import { SET_COLOR_FILTER, SET_MARCA_FILTER, SET_PRODUCT_FILTER_BY_SEARCH, SET_SORT, SET_STORE } from "../action/types";

const initialState = {
  store: [],
  storeCopy: [],
  storeFilter: []
};

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORE:
        // console.log('products', action.payload)
      return {
        ...state,
        store: action.payload,
        storeCopy: action.payload
      };
      case SET_SORT:
        if(action.name === "storeFilter") {
          if (action.payload === "ascendente") {
            const ascendente = state.storeFilter.sort((a, b) => {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            });
            return { ...state, storeFilter: ascendente };
          } else if (action.payload === "descendente") {
            const descendente = state.storeFilter.sort((a, b) => {
              if (a.name < b.name) return 1;
              if (a.name > b.name) return -1;
              return 0;
            });
            return { ...state, storeFilter: descendente };
          } else if (action.payload === "precioAlto") {
            const precioAlto = state.storeFilter.sort((a, b) => {
              if (a.price < b.price) return 1;
              if (a.price > b.price) return -1;
              return 0;
            });
            return { ...state, storeFilter: precioAlto };
          } else if (action.payload === "precioBajo") {
            const precioBajo = state.storeFilter.sort((a, b) => {
              if (a.price > b.price) return 1;
              if (a.price < b.price) return -1;
              return 0;
            });
            return { ...state, storeFilter: precioBajo };
          }
        } else {
          if (action.payload === "ascendente") {
            const ascendente = state.store.sort((a, b) => {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            });
            return { ...state, store: ascendente };
          } else if (action.payload === "descendente") {
            const descendente = state.store.sort((a, b) => {
              if (a.name < b.name) return 1;
              if (a.name > b.name) return -1;
              return 0;
            });
            return { ...state, store: descendente };
          } else if (action.payload === "precioAlto") {
            const precioAlto = state.store.sort((a, b) => {
              if (a.price < b.price) return 1;
              if (a.price > b.price) return -1;
              return 0;
            });
            return { ...state, store: precioAlto };
          } else if (action.payload === "precioBajo") {
            const precioBajo = state.store.sort((a, b) => {
              if (a.price > b.price) return 1;
              if (a.price < b.price) return -1;
              return 0;
            });
            return { ...state, store: precioBajo };
          }
        }
      case SET_PRODUCT_FILTER_BY_SEARCH:
        return {
          ...state,
          store: action.payload,
          storeFilter: action.payload
        }
        case SET_COLOR_FILTER:
      const rtas = [];
      const rtass = [];
      const rta1s = [];
      const rta2s = [];
      const cbColors = action.payload;
      const cbMarcas = action.payload2;
      if (cbMarcas.length === 0 && cbColors.length === 0) {
        return { ...state, store: state.storeCopy };
      }
      if (cbMarcas.length === 0) {
        console.log("cbMarcas", cbMarcas);
        console.log("entre en marca vacio");
        state.storeCopy.map((item) => {
          cbColors.map((id) => {
            if (id.toString() === item.colorId.toString()) {
              rtas.push(item);
            }
          });
        });
        return { ...state, store: rtas };
      }
      if (cbColors.length === 0) {
        console.log("cbMarcas", cbMarcas);
        console.log("entre en colores vacio");
        state.storeCopy.map((item) => {
          cbMarcas.map((id) => {
            if (id.toString() === item.marcaId.toString()) {
              rtass.push(item);
            }
          });
        });
        return { ...state, store: rtass };
      }
      if (cbMarcas.length > 0) {
        console.log("entre en marca con datos");

        state.storeCopy.map((item) => {
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
        console.log("rta2s", rta2s);
        return { ...state, store: rta2s };
      }
      case SET_MARCA_FILTER:
      const rta = [];
      const rta1 = [];
      const rta2 = [];
      const cbMarca = action.payload;
      const cbColor = action.payload2;
      console.log("cbColor", cbColor);
      // if (cbMarca) {

      if (cbMarca.length === 0 && cbColor.length === 0) {
        return { ...state, store: state.storeCopy };
      }

      if (cbColor.length === 0) {
        console.log("entre en color vacio");
        state.storeCopy.map((item) => {
          cbMarca.map((id) => {
            if (id.toString() === item.marcaId.toString()) {
              rta.push(item);
            }
          });
        });
        return { ...state, store: rta };
      }
      if (cbMarca.length === 0) {
        console.log("cbMarca", cbMarca);
        console.log("entre en marca vacio");
        state.storeCopy.map((item) => {
          cbColor.map((id) => {
            if (id.toString() === item.colorId.toString()) {
              rta.push(item);
            }
          });
        });
        return { ...state, store: rta };
      }
      if (cbColor.length > 0) {
        console.log("entre en color con datos");

        state.storeCopy.map((item) => {
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
        return { ...state, store: rta2 };
      }
      default:
        return state
  }
};
