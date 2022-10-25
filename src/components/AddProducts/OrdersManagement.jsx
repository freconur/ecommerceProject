import React, { useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping as carts } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setOrderById,
  setOrderByIdUndelivered,
  setOrders,
  updateOrderDelivered,
} from "../../redux/action";
import { ItemsOrder } from "./ItemsOrder";
import { ItemsOrderDelivered } from "./ItemsOrderDelivered";
const OrdersManagement = () => {
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const dispatch = useDispatch();
  const {
    orders,
    delivered,
    undelivered,
    orderDetail,
    orderDetailUndelivered,
    orderDetailDelivered,
  } = useSelector((rootReducer) => rootReducer.ordersReducer);
  useEffect(() => {
    dispatch(setOrders());
    
  }, [reducerValue, orderDetail]);

  // useEffect(() => {}, [undelivered]);
  const handleOrderDetail = (e, delivery) => {
    const id =  e.target.value
    // console.log('selectvalue', e.target.value)
    if (delivery === "delivered") {
      dispatch(setOrderById(id));
    } else {
      dispatch(setOrderByIdUndelivered(id));
    }
    forceUpdate()
  };
  const handleDelivered = (id) => {
    const update = { delivered: true };
    dispatch(updateOrderDelivered(id, update));
    window.location.reload(true);
  };
  // console.log('undelivered',undelivered)
  console.log('orderDetail',orderDetail)
  return (
    <div>
      <div id="ordenes-pendinetes" className="orders_undelivered">
        <div className="update__delivered">
          <h3>Ordenes Pendientes</h3>
          <button onClick={() => handleDelivered(orderDetail.id)}>
            Cambiar a entregado
          </button>
        </div>
        <div className="undelivered__container">
          <div className="order_number">
            <div>ID</div>
            <select onClick={(e) => handleOrderDetail(e, "undelivered")} className="select__order">
              <option  >Id</option>
              {undelivered && (
                undelivered.map((order, index) => (
                  <option
                    name="undelivered"
                    // onClick={() => handleOrderDetail(order.id, "undelivered")}
                    key={index}
                  > 
                    {order.id}
                  </option>
                ))
              ) 
              // : (
              //   <>no hay ordernes de compra</>
              // )
              }
            </select>
          </div>
          <div className="order_info">
            {orderDetailUndelivered ? (
              <div className="order_info__detail">
                <div className="order_info__id">
                  {orderDetailUndelivered.delivered == 0 ? (
                    <span>Estado: Pendiente</span>
                  ) : (
                    <span>Estado: Entregado</span>
                  )}
                  <span>Id de orden: {orderDetailUndelivered.id}</span>
                  {/* <span>usuario: {orderDetailUndelivered.user.email}</span> */}
                  <span>Id de usuario: {orderDetailUndelivered.userId}</span>
                  {/* <span>fecha: {orderDetailUndelivered.user.createdAt}</span> */}
                </div>
                <ItemsOrder items={orderDetailUndelivered.items} />
              </div>
            ) : (
              <div className="message_info_order">
                <div>
                  <FontAwesomeIcon icon={carts} />
                  <p>
                    Selecciona un ID de la lista izquierda para verificarlos
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div id="ordenes-entregados" className="orders_undelivered">
        <div className="update__delivered">
          <h3>Ordenes Entregadas</h3>
          {/* <button onClick={() => handleDelivered(orderDetail.id)}>
            Cambiar a entregado
          </button> */}
        </div>
        <div className="undelivered__container">
          <div className="order_number">
            <div>ID</div>
            {/* <select onChange={() => handleOrderDetail(order.id, "delivered")} className="select__order"> */}
            <select onChange={(e) => handleOrderDetail(e, "delivered")} className="select__order">
            <option  >Id</option>

              {delivered && (
                delivered.map((order, index) => (
                  <option
                    name="delivered"
                    // onChange={() => handleOrderDetail(order.id, "delivered")}
                    key={index}
                  >
                    {order.id}
                  </option>
                ))
              ) 
              // : (
              //   <>no hay ordernes de compra</>
              // )
              }
            </select>
          </div>
          <div className="order_info">
            {orderDetailDelivered ? (
              <div className="order_info__detail">
                <div className="order_info__id">
                  {orderDetailDelivered.delivered == 0 ? (
                    <span>Estado: Pendiente</span>
                  ) : (
                    <span>Estado: Entregado</span>
                  )}
                  <span>Id de orden: {orderDetailDelivered.id}</span>
                  {/* <span>usuario: {orderDetailDelivered.user.email}</span> */}
                  <span>Id de usuario: {orderDetailDelivered.userId}</span>
                  {/* <span>fecha: {orderDetailDelivered.user.createdAt}</span> */}
                </div>
                <ItemsOrderDelivered items={orderDetailDelivered.items} />
                {/* <ItemsOrder items={orderDetailDelivered.items} /> */}
              </div>
            ) : (
              <div className="message_info_order">
                <div>
                  <FontAwesomeIcon icon={carts} />
                  <p>
                    Selecciona un ID de la lista izquierda para verificarlos
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { OrdersManagement };
