// import { auth, googleAuthProvider, signInWithPopup } from "../../firebase/firebase.config";
import app from "../../firebase/firebase.config";

import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  CLEAN_CART,
  CREATE_ORDER,
  FILTER_ALL_ORDERS_BY_USER,
  FILTER_CART_ID,
  FILTER_ORDER_BY_USER,
  GOOGLE_SIGN_IN_FAIL,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  PRODUCT_TO_CART,
  SET_AMOUNT_CART,
  SET_CAMISETAS,
  SET_CART,
  SET_CART_ID,
  SET_CATEGORIES,
  SET_COLOR,
  SET_COLOR_FILTER,
  SET_CURRENT_ID,
  SET_CURRENT_USER,
  SET_GENEROS,
  SET_MARCAS,
  SET_MARCA_FILTER,
  SET_ORDER,
  SET_ORDER_BY_ID,
  SET_ORDER_BY_ID_UNDELIVERED,
  SET_ORDER_DELIVERED,
  SET_PANTALONES,
  SET_PRODUCTS,
  SET_PRODUCTS_FILTER_BY_GENERO,
  SET_PRODUCT_FILTER_BY_SEARCH,
  SET_SORT,
  SET_STORE,
  SET_USER,
  SET_USER_DB,
  SET_USER_ID,
  SET_USUARIO_ACTUAL,
  SET_ZAPATILLAS,
  SET_ZAPATILLAS_DETAILS,
} from "./types";
import axios from "axios";
const auth = getAuth(app);

export const setProducts = () => (dispatch) => {
  return axios
    .get("http://localhost:3000/api/v1/products")
    .then((res) => {
      return dispatch({
        type: SET_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};
export const setStore = () => (dispatch) => {
  return axios
    .get("http://localhost:3000/api/v1/products")
    .then((res) => {
      return dispatch({
        type: SET_STORE,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};

export const setCart = () => (dispatch) => {
  return axios
    .get("http://localhost:3000/api/v1/carts")
    .then((res) => {
      return dispatch({
        type: SET_CART,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};

export const setCategories = () => (dispatch) => {
  return axios
    .get("http://localhost:3000/api/v1/categories")
    .then((res) => {
      return dispatch({
        type: SET_CATEGORIES,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};

export const setZapatillas = () => (dispatch) => {
  return axios
    .get("http://localhost:3000/api/v1/categories/2")
    .then((res) => {
      return dispatch({
        type: SET_ZAPATILLAS,
        payload: res.data.products,
      });
    })
    .catch((error) => console.log(error));
};
export const setPantalones = () => (dispatch) => {
  return axios
    .get("http://localhost:3000/api/v1/categories/1")
    .then((res) => {
      return dispatch({
        type: SET_PANTALONES,
        payload: res.data.products,
      });
    })
    .catch((error) => console.log(error));
};
export const setCamisetas = () => (dispatch) => {
  return axios
    .get("http://localhost:3000/api/v1/categories/3")
    .then((res) => {
      return dispatch({
        type: SET_CAMISETAS,
        payload: res.data.products,
      });
    })
    .catch((error) => console.log(error));
};
export const setZapatillaDetails = (payload) => (dispatch) => {
  return (
    axios
      .get(`http://localhost:3000/api/v1/products/${payload}`)
      .then((res) => {
        console.log("res", res.data);
        return dispatch({
          type: SET_ZAPATILLAS_DETAILS,
          payload: res.data,
        });
      })
      // .catch((error) => console.log(error));
      .catch((error) => {
        return dispatch({
          type: SET_ZAPATILLAS_DETAILS,
          payload: error.name,
        });
      })
  );
};
export const updateProduct = (id, payload) => (dispatch) => {
  return axios
    .patch(`http://localhost:3000/api/v1/products/${id}`, payload)
    .then((res) => {
      console.log("res", res.data);
      return dispatch({
        type: SET_ZAPATILLAS_DETAILS,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};
export const deleteProduct = (payload) => (dispatch) => {
  return axios
    .delete(`http://localhost:3000/api/v1/products/${payload}`)
    .catch((error) => console.log(error));
};
export const setProductsFilterBySearch = (payload) => (dispatch) => {
  // try {
  return axios
    .get(`http://localhost:3000/api/v1/products?name=${payload}`)
    .then((res) => {
      if (res.data.length > 0) {
        return dispatch({
          type: SET_PRODUCT_FILTER_BY_SEARCH,
          payload: res.data,
        });
      } else {
        return dispatch({
          type: SET_PRODUCT_FILTER_BY_SEARCH,
          payload: "No se encontro resultados",
        });
      }
    })
    .catch((error) => console.log(error));
  // }catch {
};
// }
// export function setProductsFilterBySearch(payload) {
//   return async function (dispatch) {
//     try {
//       await axios.get(
//         `http://localhost:3000/api/v1/products?name=${payload}`
//       );
//       return dispatch({ type: SET_PRODUCT_FILTER_BY_SEARCH, payload: response.data });
//     } catch {
//       return alert("Recipe Not Found");
//     }
//   };
// }
export const setMarcas = (payload) => (dispatch) => {
  return axios
    .get(`http://localhost:3000/api/v1/marcas/`)
    .then((res) => {
      return dispatch({
        type: SET_MARCAS,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};
export const setGeneros = (payload) => (dispatch) => {
  return axios
    .get(`http://localhost:3000/api/v1/generos/`)
    .then((res) => {
      return dispatch({
        type: SET_GENEROS,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};
export const setColors = (payload) => (dispatch) => {
  return axios
    .get(`http://localhost:3000/api/v1/colors/`)
    .then((res) => {
      return dispatch({
        type: SET_COLOR,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};
export const setUsers = (payload) => (dispatch) => {
  return axios
    .get(`http://localhost:3000/api/v1/users/`)
    .then((res) => {
      return dispatch({
        type: SET_USER_DB,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};
export const setUserDetail = (payload) => (dispatch) => {
  if(payload !== undefined && payload !== null ) {
    return axios
      .get(`http://localhost:3000/api/v1/users/${payload}`)
      .then((res) => {
        return dispatch({
          type: FILTER_ALL_ORDERS_BY_USER,
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));

  }
};

export const setColorFilter = (payload, payload2, payload3) => ({
  type: SET_COLOR_FILTER,
  payload,
  payload2,
  payload3,
});
export const setSortByName = (payload, name) => ({
  type: SET_SORT,
  payload,
  name,
});
///////////////////marcas///////////////////
export const setMarcaFilter = (payload, payload2) => ({
  type: SET_MARCA_FILTER,
  payload,
  payload2,
});
///////////////////marcas///////////////////
export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user) => ({
  type: GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});
export const googleSignInFail = (error) => ({
  type: GOOGLE_SIGN_IN_FAIL,
  payload: error,
});

export const googleSignInInitiate = (usersDb) => {
  return function (dispatch) {
    dispatch(googleSignInStart());
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(({ user }) => {
        dispatch(googleSignInSuccess(user));
        dispatch(createUserWithGoogle(user, usersDb));
      })
      .catch((error) => dispatch(googleSignInFail(error.message)));
  };
};

export const createUserWithGoogle = (user, usersDb) => {
  const rta = usersDb.find((userDb) => userDb.idGoogle === user.uid);
  const newUser = {
    idGoogle: user.uid,
    email: user.email,
  };
  if (rta === undefined) {
    return async function (dispatch) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/users",
          newUser
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    };
  } else return "no funciono";
};

export const googleSignOut = () => {
  return function (dispatch) {
    try {
      signOut(auth);
      console.log("se cerro sesion");
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setUserCurrent = (payload) => ({
  type: SET_CURRENT_USER,
  payload,
});
export const setCurrentId = (payload) => ({
  type: SET_CURRENT_ID,
  payload,
});

export function createProduct(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/products",
        payload
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}
export function createCart(user, cart) {
  const findUser = [];
  cart.find((c) => {
    if (c.userId === user.id) {
      findUser.push(user.id);
    }
  });
  const newCart = {
    userId: Number(user.id),
  };

  return async function (dispatch) {
    try {
      if (findUser.length === 0) {
        const response = await axios.post(
          "http://localhost:3000/api/v1/carts/",
          newCart
        );
        return response;
      } else return console.log("este usuario ya tiene un carrito");
    } catch (error) {
      console.log(error);
    }
  };
}
export function addToCart(payload) {
  console.log(payload);
  return async function (dispatch) {
    try {
      console.log(payload);
      const response = await axios.post(
        "http://localhost:3000/api/v1/carts/add-item",
        payload
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export const setUserId = (payload) => ({
  type: SET_USER_ID,
  payload,
});
export const productToCart = (payload) => ({
  type: PRODUCT_TO_CART,
  payload,
});

export const filterCartId = (payload) => ({
  type: FILTER_CART_ID,
  payload,
});

export const setCartId = (payload) => (dispatch) => {
  if (payload !== null) {
    return axios
      .get(`http://localhost:3000/api/v1/carts/${payload}`)
      .then((res) => {
        return dispatch({
          type: SET_CART_ID,
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  }
};

export const updateAmountCart = (payload, amount) => {
  const newAmount = { amount: amount };
  return async function (dispatch) {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/v1/carts/add-item/${payload}`,
        newAmount
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteAmountCart = (payload) => {
  console.log("payload", payload);
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v1/carts/add-item/${payload}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export const setProductsFilterByGenero = (payload) => ({
  type: SET_PRODUCTS_FILTER_BY_GENERO,
  payload,
});
export const setAmountCart = (payload) => (dispatch) => {
  // console.log('payload',payload)
  // if (payload !== undefined && payload !== null) {
    if (typeof payload === 'number') {
    return axios
      .get(`http://localhost:3000/api/v1/carts/${payload}/total-products`)
      .then((res) => {
        return dispatch({
          type: SET_AMOUNT_CART,
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  }
};
export function createOrder(id) {
  console.log("id", id);
  // let idNumber = parseInt(id, 10)
  // const idNumber = id
  const newOrder = {
    userId: id,
  };
  return async function (dispatch) {
    try {
      // if (findUser.length === 0) {
      const response = await axios.post(
        "http://localhost:3000/api/v1/orders",
        newOrder
      );
      console.log("rta del order create", response);
      return dispatch({
        type: CREATE_ORDER,
        // payload: response.data.userId,
        payload: response.data.id,
      });
      // } else return console.log("este usuario ya tiene un carrito");
    } catch (error) {
      console.log(error);
    }
  };
}
export function addProductsToOrder(payload) {
  console.log("la iteracion", payload);
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/orders/add-item-order",
        payload
      );
      console.log("addProductsToOrder", response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}
export const setUsuarioActual = (payload) => ({
  type:SET_USUARIO_ACTUAL,
  payload
})
export const setOrders = () => (dispatch) => {
  return axios
  .get("http://localhost:3000/api/v1/orders/")
  .then((res) => {
    return dispatch({
      type:SET_ORDER,
      payload: res.data
    })
  })
  .catch((error) => console.log(error));
}
export const setOrderById = (payload) => (dispatch) => {
  return axios
  .get(`http://localhost:3000/api/v1/orders/${payload}`)
  .then((res) => {
    return dispatch({
      type:SET_ORDER_BY_ID,
      payload: res.data,
    })
  })
  .catch((error) => console.log(error));
}
export const setOrderByIdUndelivered = (payload) => (dispatch) => {
  return axios
  .get(`http://localhost:3000/api/v1/orders/${payload}`)
  .then((res) => {
    return dispatch({
      type:SET_ORDER_BY_ID_UNDELIVERED,
      payload: res.data,
    })
  })
  .catch((error) => console.log(error));
}
export const updateOrderDelivered = (id, payload) => (dispatch) => {
  return axios
    .patch(`http://localhost:3000/api/v1/orders/${id}`, payload)
    // .then((res) => {
    //   console.log("res", res.data);
    //   return dispatch({
    //     type: SET_ZAPATILLAS_DETAILS,
    //     payload: res.data,
    //   });
    // })
    .catch((error) => console.log(error));
};

export const filterOrderByUser = (payload) => ({
  type:FILTER_ORDER_BY_USER,
  payload
})

export const cleanOrderId = () => ({
  type:CLEAN_CART,
})
