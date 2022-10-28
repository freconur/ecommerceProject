import React, { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan as trash } from "@fortawesome/free-regular-svg-icons";
import {
  addProductsToOrder,
  cleanCart,
  cleanOrderId,
  createOrder,
  deleteAmountCart,
  setAmountCart,
  setCart,
  setCartId,
  setCurrentId,
  setMarcas,
  setUserCurrent,
  setUsers,
  setUsuarioActual,
  updateAmountCart,
} from "../../redux/action";
import "./cart.css";
import swal from 'sweetalert';
import { Link, useNavigate } from "react-router-dom";
const Cart = () => {
  let total = 0;
  let countProducts = 0;
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCart());
    dispatch(setUsers());
    dispatch(setMarcas());
  }, [reducerValue]);
  const {
    cart,
    cartDetail,
    currentUser,
    currentUserDb,
    kaka,
    orderId,
    userIdCurrent,
  } = useSelector((rootReducer) => rootReducer.userReducer);
  useEffect(() => {
    dispatch(setUsuarioActual());
    dispatch(setUserCurrent(userIdCurrent));
    dispatch(setCartId(currentUserDb));
  }, [currentUserDb, cart]);
  const navigate = useNavigate();
  const handleCreateOrder = () => {
    swal({
      title: "Genial estas a punto de crear una orden compra",
      text : "Deseas continuar?",
      icon: "warning",
      buttons: ["No", "Si"]
    }).then(rta => {
      if(rta) {
        swal({text: "En hora buena se ha generado tu orden de compra, ve a tus pedidos para mas informacion", icon: "success"})
        dispatch(createOrder(userIdCurrent));
      }
    })

  };
  if (orderId) {
    kaka.map((item) => {
      const itemToOrder = {
        orderId: orderId,
        productId: item.CartProduct.productCartId,
        amount: item.CartProduct.amount,
      };
      dispatch(addProductsToOrder(itemToOrder));
    });
    dispatch(cleanOrderId());
  }
  const cartSort = kaka.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  const handleAmount = (e) => {
    const id = e.target.value;
    if (e.target.name === "plus") {
      let amount;
      kaka.find((item) => {
        if (parseInt(item.CartProduct.id, 10) === parseInt(id, 10)) {
          amount = parseInt(item.CartProduct.amount, 10);
        }
      });
      amount = amount + 1;
      dispatch(updateAmountCart(id, amount));
    }
    if (e.target.name === "less") {
      let amount;
      kaka.find((item) => {
        if (parseInt(item.CartProduct.id, 10) === parseInt(id, 10)) {
          amount = parseInt(item.CartProduct.amount, 10);
        }
      });
      if (amount > 1) {
        amount = amount - 1;
        dispatch(updateAmountCart(id, amount));
      }
    }
    // dispatch(setAmountCart(countProducts, e.target.name));
    dispatch(setAmountCart(e.target.name));
    forceUpdate();
  };
  const handleDeleteCart = (e) => {
    const id = e.target.value;
    const item = kaka.find(
      (item) => parseInt(item.CartProduct.id, 10) === parseInt(id, 10)
    );
    dispatch(deleteAmountCart(item.CartProduct.id));
    forceUpdate();
  };
  if (kaka.length > 0) {
    kaka.forEach((p) => {
      countProducts = countProducts + p.CartProduct.amount;
      total = total + p.price * p.CartProduct.amount;
    });
    return (
      <div className="cart">
        <div className="title_cart">
          <h1>Carrito de Compras</h1>
          <p>{countProducts} productos</p>
        </div>
        <div className="product_cart__container">
          <ul className="product_cart">
            {cartSort.map((cart, index) => (
              <li key={index} className="cart__container">
                <div className="product">
                  <div className="info_product_cart__container">

                  <Link to={`/product-detail/${cart.id}`} className="details">
                    <div className="cart_image__container">
                      <span>{cart.CartProduct.amount}</span>
                      <img src={cart.image} alt={cart.name} />
                    </div>

                    {/* ///esto aparecera cuando estemos en el en modo responsive */}
                    <div className="info_cart__responsive">
                      <div className="title">
                        <p>{cart.marca.name}</p>
                        <h2>{cart.name}</h2>
                      </div>
                      <div className="price">
                        <span>Online</span>
                        <p>S/ {cart.price}</p>
                      </div>
                    </div>
                    {/* ///esto aparecera cuando estemos en el en modo responsive */}

                    <div className="title disabled">
                      <p>{cart.marca.name}</p>
                      <h2>{cart.name}</h2>
                    </div>
                    <div className="price disabled">
                      <span>Online</span>
                      <p>S/ {cart.price}</p>
                    </div>
                    
                  </Link>
                  <div className="counter__container">

                  <div className="counterCart">
                    <button
                      name="less"
                      value={cart.CartProduct.id}
                      onClick={handleAmount}
                    >
                      -
                    </button>
                    <input
                      name="amount"
                      disabled
                      placeholder={cart.CartProduct.amount}
                    />
                    <button
                      name="plus"
                      value={cart.CartProduct.id}
                      onClick={handleAmount}
                    >
                      +
                    </button>
                  </div>

                  <div className="cart_product__deletec--container delete_responsive">
                  <div className="icon_delete">
                    <FontAwesomeIcon icon={trash} />
                    <button
                      className="cart_product__delete"
                      name="delete"
                      value={cart.CartProduct.id}
                      onClick={handleDeleteCart}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>

                  </div>
                  </div>
                </div>
                <div className="cart_product__deletec--container ">
                  <div className="icon_delete">
                    <FontAwesomeIcon icon={trash} />
                    <button
                      className="cart_product__delete"
                      name="delete"
                      value={cart.CartProduct.id}
                      onClick={handleDeleteCart}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="template-total-container">
            <div className="sumary-template-holder">
              <h4>Resumen de compra</h4>
              <div className="subtotal">
                <span>Sub-total</span>
                <p>S/ {total}</p>
              </div>
              <div className="total">
                <span>Total</span>
                <p>S/ {total}</p>
              </div>
            </div>
            {/* <OrderButton handleCreateOrder={handleCreateOrder} /> */}
            {/* <Link to="/mis-pedidos"> */}
            <div className="order_button__container">
              <button onClick={handleCreateOrder} className="order_button">
                Ir a comprar
              </button>
            </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="notFound_products__cart">
      <p>No hay productos en el carrito</p>
      <Link to="/">Visita La Tienda</Link>
    </div>
  );
};

export default Cart;
