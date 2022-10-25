import { SET_CAMISETAS, SET_COLOR_FILTER, SET_MARCA_FILTER, SET_PRODUCTS_FILTER_BY_GENERO, SET_SORT } from "../action/types";

const initialState = {
  camisetas: [],
  camisetasCopy: [],
};

export const camisetasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAMISETAS:
      return {
        ...state,
        camisetas: action.payload,
        camisetasCopy: action.payload,
      };
      case SET_PRODUCTS_FILTER_BY_GENERO:
        const productsGenero = []
        state.camisetasCopy.map(item => {
          if(item.generoId.toString() === action.payload.toString()) {
            productsGenero.push(item)
          }
        });
        return {
          ...state,
          camisetas:productsGenero
        }
      case SET_SORT:
      if (action.payload === "ascendente") {
        const ascendente = state.camisetas.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        return { ...state, camisetas: ascendente };
      } else if (action.payload === "descendente") {
        const descendente = state.camisetas.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
        return { ...state, camisetas: descendente };
      } else if (action.payload === "precioAlto") {
        const precioAlto = state.camisetas.sort((a, b) => {
          if (a.price < b.price) return 1;
          if (a.price > b.price) return -1;
          return 0;
        });
        return { ...state, camisetas: precioAlto };
      } else if (action.payload === "precioBajo") {
        const precioBajo = state.camisetas.sort((a, b) => {
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          return 0;
        });
        return { ...state, camisetas: precioBajo };
      }
      case SET_COLOR_FILTER:
      const rtas = [];
      const rtass = [];
      const rta1s = [];
      const rta2s = [];
      const cbColors = action.payload;
      const cbMarcas = action.payload2;
      if (cbMarcas.length === 0 && cbColors.length === 0) {
        return { ...state, camisetas: state.camisetasCopy };
      }
      if (cbMarcas.length === 0) {
        console.log("cbMarcas", cbMarcas);
        console.log("entre en marca vacio");
        state.camisetasCopy.map((item) => {
          cbColors.map((id) => {
            if (id.toString() === item.colorId.toString()) {
              rtas.push(item);
            }
          });
        });
        return { ...state, camisetas: rtas };
      }
      if (cbColors.length === 0) {
        console.log("cbMarcas", cbMarcas);
        console.log("entre en colores vacio");
        state.camisetasCopy.map((item) => {
          cbMarcas.map((id) => {
            if (id.toString() === item.marcaId.toString()) {
              rtass.push(item);
            }
          });
        });
        return { ...state, camisetas: rtass };
      }
      if (cbMarcas.length > 0) {
        console.log("entre en marca con datos");

        state.camisetasCopy.map((item) => {
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
        return { ...state, camisetas: rta2s };
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
        return { ...state, camisetas: state.camisetasCopy };
      }

      if (cbColor.length === 0) {
        console.log("entre en color vacio");
        state.camisetasCopy.map((item) => {
          cbMarca.map((id) => {
            if (id.toString() === item.marcaId.toString()) {
              rta.push(item);
            }
          });
        });
        return { ...state, camisetas: rta };
      }
      if (cbMarca.length === 0) {
        console.log("cbMarca", cbMarca);
        console.log("entre en marca vacio");
        state.camisetasCopy.map((item) => {
          cbColor.map((id) => {
            if (id.toString() === item.colorId.toString()) {
              rta.push(item);
            }
          });
        });
        return { ...state, camisetas: rta };
      }
      if (cbColor.length > 0) {
        console.log("entre en color con datos");

        state.camisetasCopy.map((item) => {
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
        return { ...state, camisetas: rta2 };
      }
      default:
        return state
  }
};
