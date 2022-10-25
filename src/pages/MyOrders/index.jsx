import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterOrderByUser,
  setOrderById,
  setOrders,
  setUserDetail,
  setUsers,
} from "../../redux/action";
import { ItemsOrdersUser } from "./IitemsOrdersUser";
import "./myOrders.css";
const MyOrders = () => {
  const [oldOrderActive, setOldOrderActive] = useState(true);
  const dispatch = useDispatch();
  const {
    fiveOrderOnlyDelivereds,
    ordersUndelivered,
  } = useSelector((rootReducer) => rootReducer.ordersReducer);
  const { currentUser, usersDb, currentUserDb, navbarId } = useSelector(
    (rootReducer) => rootReducer.userReducer
  );

  useEffect(() => {
    dispatch(setOrders());
    dispatch(setUsers());
    dispatch(setUserDetail(navbarId));
  }, [navbarId]);
  return (
    <div className="my_orders">
      <div>
        {oldOrderActive ? (
          <p
            className="viewOldOrder"
            onClick={() => setOldOrderActive(!oldOrderActive)}
          >
            ver tus 5 ultimas ordenes entregadas
          </p>
        ) : (
          <p
            className="viewOldOrder"
            onClick={() => setOldOrderActive(!oldOrderActive)}
          >
            ver tus ordenes pendientes
          </p>
        )}
      </div>
      {oldOrderActive && (
        <ul className="orderDeliveredContainer">
          <h2>Ordenes Pendientes</h2>
          {ordersUndelivered ? (
            ordersUndelivered.map((order, index) => {
              return (
                <li className="orderDelivered__list" key={index}>
                  <div className="info_header">
                    <span>id order: {order.id}</span>
                    <span>id de usuario: {order.userId}</span>
                    <span>fecha de compra: {order.createdAt}</span>
                  </div>
                  <ItemsOrdersUser order={order.items} />
                </li>
              );
            })
          ) : (
            <p>No hay pedidos pendientes</p>
          )}
        </ul>
      )}
      {!oldOrderActive && (
        <ul className="orderDeliveredContainer">
          <h2>Ordenes Entregradas</h2>
          {fiveOrderOnlyDelivereds ? (
            fiveOrderOnlyDelivereds.map((order, index) => {
              return (
                <li className="orderDelivered__list" key={index}>
                  <div className="info_header">
                    <span>id order: {order.id}</span>
                    <span>id de usuario: {order.userId}</span>
                    <span>fecha de compra: {order.createdAt}</span>
                  </div>
                  <ItemsOrdersUser order={order.items} />
                </li>
              );
            })
          ) : (
            <p>No tienes ordenes entragadas</p>
          )}
        </ul>
      )}
    </div>
  );
};

export { MyOrders };
