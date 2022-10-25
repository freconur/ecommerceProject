import React from "react";

const SideBarDashBoard = () => {
  return (
    
    <div className="sideBar">
      <h2>Dashboard de administrador</h2>
      <ul>
        <li>
          gestion de productos
          <ul className="management_ul">
            <li>
                <a href="#agregar-productos">agregar productos</a>
            </li>
            <li>
                <a href="#buscar-productos">buscar productos</a>
            </li>
          </ul>
        </li>
        <li>
          gestion de ordenes
          <ul className="management_ul">
            <li>
              <a href="#ordenes-pendinetes">ordenes pendientes</a>
            </li>
            <li>
              <a href="#ordenes-entregados">ordenes despachadas</a>
            </li>
          </ul>
        </li>
        {/* <li>
          Mis pedidos
        </li>
        <li>salir</li> */}
      </ul>
    </div>
  );
};

export { SideBarDashBoard };
