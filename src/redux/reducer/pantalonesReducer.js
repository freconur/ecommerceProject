import { SET_COLOR_FILTER, SET_MARCA_FILTER, SET_PANTALONES, SET_PRODUCTS_FILTER_BY_GENERO, SET_SORT } from "../action/types";

const initialState = {
  pantalones: [],
  pantalonesCopy: [],
};

export const pantalonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PANTALONES:
      return {
        ...state,
        pantalones: action.payload,
        pantalonesCopy: action.payload,
      };
      case SET_PRODUCTS_FILTER_BY_GENERO:
        const productsGenero = []
        state.pantalonesCopy.map(item => {
          if(item.generoId.toString() === action.payload.toString()) {
            productsGenero.push(item)
          }
        });
        return {
          ...state,
          pantalones:productsGenero
        }
      case SET_SORT:
      if (action.payload === "ascendente") {
        const ascendente = state.pantalones.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        return { ...state, pantalones: ascendente };
      } else if (action.payload === "descendente") {
        const descendente = state.pantalones.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
        return { ...state, pantalones: descendente };
      } else if (action.payload === "precioAlto") {
        const precioAlto = state.pantalones.sort((a, b) => {
          if (a.price < b.price) return 1;
          if (a.price > b.price) return -1;
          return 0;
        });
        return { ...state, pantalones: precioAlto };
      } else if (action.payload === "precioBajo") {
        const precioBajo = state.pantalones.sort((a, b) => {
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          return 0;
        });
        return { ...state, pantalones: precioBajo };
      }
    case SET_COLOR_FILTER:
      const rtas = [];
      const rtass = [];
      const rta1s = [];
      const rta2s = [];
      const cbColors = action.payload;
      const cbMarcas = action.payload2;
      if (cbMarcas.length === 0 && cbColors.length === 0) {
        return { ...state, pantalones: state.pantalonesCopy };
      }
      if (cbMarcas.length === 0) {
        console.log("cbMarcas", cbMarcas);
        console.log("entre en marca vacio");
        state.pantalonesCopy.map((item) => {
          cbColors.map((id) => {
            if (id.toString() === item.colorId.toString()) {
              rtas.push(item);
            }
          });
        });
        return { ...state, pantalones: rtas };
      }
      if (cbColors.length === 0) {
        console.log("cbMarcas", cbMarcas);
        console.log("entre en colores vacio");
        state.pantalonesCopy.map((item) => {
          cbMarcas.map((id) => {
            if (id.toString() === item.marcaId.toString()) {
              rtass.push(item);
            }
          });
        });
        return { ...state, pantalones: rtass };
      }
      if (cbMarcas.length > 0) {
        console.log("entre en marca con datos");

        state.pantalonesCopy.map((item) => {
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
        return { ...state, pantalones: rta2s };
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
        return { ...state, pantalones: state.pantalonesCopy };
      }

      if (cbColor.length === 0) {
        console.log("entre en color vacio");
        state.pantalonesCopy.map((item) => {
          cbMarca.map((id) => {
            if (id.toString() === item.marcaId.toString()) {
              rta.push(item);
            }
          });
        });
        return { ...state, pantalones: rta };
      }
      if (cbMarca.length === 0) {
        console.log("cbMarca", cbMarca);
        console.log("entre en marca vacio");
        state.pantalonesCopy.map((item) => {
          cbColor.map((id) => {
            if (id.toString() === item.colorId.toString()) {
              rta.push(item);
            }
          });
        });
        return { ...state, pantalones: rta };
      }
      if (cbColor.length > 0) {
        console.log("entre en color con datos");

        state.pantalonesCopy.map((item) => {
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
        return { ...state, pantalones: rta2 };
      }
    default:
      return state;
  }
};
