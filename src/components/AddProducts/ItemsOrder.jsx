import React from "react";

const ItemsOrder = ({ items,  }) => {
  return (
    <ul className="items_order">
      {items &&
        items.map((item, index) => {
          return (
            <li key={index} className="item_order__list">
              <img src={item.image} alt="" />
              <div className="item_order_info">
                <span>ID: {item.id}</span>
                <span className="inter_order__name">{item.name}</span>
                <span>cantidad: {item.OrderProduct.amount}</span>
                <span>Precio: S/ {item.price}</span>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export { ItemsOrder };
