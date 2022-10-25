import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser as user } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass as search } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping as carts } from "@fortawesome/free-solid-svg-icons";

import "./navabar.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import app from "../../firebase/firebase.config";
import {
  setAmountCart,
  setCart,
  setProductsFilterBySearch,
  setUser,
  setUserCurrent,
} from "../../redux/action";
import { getAuth } from "firebase/auth";
import SignInWithGoogleModal from "../../modals/SignInWithGoogleModal";
import User from "./User";
const Navbar = () => {
  const { currentUser, amountCart, usersDb, cart, currentUserDb, navbarId } =
    useSelector((rootReducer) => rootReducer.userReducer);
  const userReducer = useSelector((rootReducer) => rootReducer.userReducer);
  const userUid = { ...currentUser };
  const auth = getAuth(app);
  const [isOpen, setIsOpen] = useState(false);
  const [letterUser, setLetterUser] = useState("");
  const [nameUser, setNameUser] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const rta = usersDb.find((user) => user.idGoogle === userUid.uid);
  useEffect(() => {
    dispatch(setUserCurrent(rta));
    dispatch(setCart());
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const name = [...authUser.displayName];
        const nameUsera = [];
        for (const letra of name) {
          if (letra === " ") {
            setNameUser(nameUsera);
            break;
          } else {
            nameUsera.push(letra);
          }
        }
        setLetterUser(authUser.displayName[0]);
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
    dispatch(setAmountCart(currentUserDb));
  }, [dispatch, rta, currentUserDb]);
  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const navigate = useNavigate();
  const handleSearchProduct = (e) => {
    e.preventDefault();
    if (searchValue !== "") {
      dispatch(setProductsFilterBySearch(searchValue));
      navigate("/search-products");
    }
  };
  return (
        <div className='navbar'>
          <div className="navbar__container">
            <Link className="brand" to="/">
              <img
                className="navbar__brand"
                src="https://firebasestorage.googleapis.com/v0/b/ecommerce-eacb4.appspot.com/o/wikzon.png?alt=media&token=8e9b1cd4-6ebb-46d7-ab3d-1893c2e73f55"
                alt=""
              />
            </Link>
            <div className="search_input__container">
              <input
                onChange={handleChangeSearch}
                className="navbar_input"
                placeholder="Encuentra tu productos, marca y mas"
                value={searchValue}
              />
              <button type="submit" onClick={handleSearchProduct}>
                <FontAwesomeIcon icon={search} />
              </button>
            </div>
            <ul className="navbar__buttons">
              {currentUser ? (
                <User letterUser={letterUser} nameUser={nameUser} />
              ) : (
                <div className="icon_navbar__container">
                  <FontAwesomeIcon
                    onClick={() => setIsOpen(!isOpen)}
                    className="iconNavbar"
                    icon={user}
                  />
                  <span className="iconNavbar__name">inicio</span>
                </div>
              )}
              <li className="icon_navbar__container">
                <Link className="cart_icon__container" to="/cart">
                  {currentUser ? <span>{amountCart}</span> : <span>0</span>}
                  <FontAwesomeIcon className="iconNavbar" icon={carts} />
                </Link>
                <span className="iconNavbar__name">carrito</span>
              </li>
              <SignInWithGoogleModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </ul>
          </div>
        </div>
  );
};

export default Navbar;
