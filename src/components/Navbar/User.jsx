import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown as arrowDown } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser as user } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleLeft as logout } from "@fortawesome/free-regular-svg-icons";
import { faBox as order } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { googleSignOut } from "../../redux/action";

const User = ({ letterUser, nameUser }) => {
  const dispatch = useDispatch()
  const handleGoogleSignOut = () => {
     dispatch(googleSignOut())
  }
  const [activeMenuUser, setActiveMenuUser] = useState(false);
  return (
    <>
      <li className="icon_navbar__container">
        <div
          onClick={() => setActiveMenuUser(!activeMenuUser)}
          className="user"
        >
          <div className="letter_user">{letterUser}</div>
          <FontAwesomeIcon className="icon_navbar_arrow" icon={arrowDown} />
        </div>
        <span className="iconNavbar__name letter_name">mi cuenta</span>

        {activeMenuUser && (
          <ul className="menu_user">
            <li className="menu_user__hello">Hola {nameUser}!</li>
            <li>
              <Link className="user_list" onClick={() => setActiveMenuUser(!activeMenuUser)} to='/user'>
                <FontAwesomeIcon icon={user} className="menu_user__icon" />
                Mi Dashboard
              </Link>
            </li>
            <li>
              <Link className="user_list" onClick={() => setActiveMenuUser(!activeMenuUser)} to='/mis-pedidos'>
                <FontAwesomeIcon icon={order} className="menu_user__icon" />
                Mis Pedidos
              </Link>
            </li>
            <li >
              <Link onClick={handleGoogleSignOut} to="/">
              <FontAwesomeIcon icon={logout} className="menu_user__icon" />
              Cerrar sesion
              </Link>
            </li>
          </ul>
        )}
      </li>
    </>
  );
};

export default User;
