import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCart,
  createCart,
  setAmountCart,
  setCart,
  setUserCurrent,
  setUsers,
  setZapatillaDetails,
} from "../../redux/action";
import "./detailProduct.css";
const DetailProduct = () => {
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  const [amountValue, setAmountValue] = useState(1)
  const { productId } = useParams();
  const { zapatillasDetail } = useSelector(
    (rootReducer) => rootReducer.productsReducer
  );
  const { currentUser, cart, userId, usersDb, currentUserDb } = useSelector(
    (rootReducer) => rootReducer.userReducer
  );
  const dispatch = useDispatch();
  const category = { ...zapatillasDetail.category };
  const marca = { ...zapatillasDetail.marca };
  const color = { ...zapatillasDetail.color };
  const currentUs = { ...currentUser };
  const rta = usersDb.find((user) => user.idGoogle === currentUs.uid);

  useEffect(() => {
    dispatch(setUserCurrent(rta))
    dispatch(setZapatillaDetails(productId));
    dispatch(setUsers());
    dispatch(setCart());
  }, [currentUser, currentUserDb, reducerValue]);

  const handleAddToCart = () => {
    const arrayUser = [];
    let arrayCart = null;
    const user = usersDb.find((userDb) => userDb.idGoogle === currentUs.uid);
    usersDb.find((userDb) => {
      if (userDb.idGoogle === currentUs.uid) {
        arrayUser.push(userDb.id);
      }
    });
    cart.find((cart) => {
      if (cart.userId === arrayUser[0]) {
        arrayCart = cart.id;
      }
    });
    const addProductCart = {
      cartId: arrayCart,
      productCartId: Number(productId),
      amount: amountValue,
    };
    dispatch(createCart(user, cart));
    dispatch(addToCart(addProductCart));
    dispatch(setAmountCart(currentUserDb))
    forceUpdate()
  };
  const handleAmount = (e) => {
    if(e.target.name === 'plus') {
      setAmountValue(amountValue + 1)
    }
    if((e.target.name === 'less')) {
      if(amountValue > 1) {
        setAmountValue(amountValue - 1)
      }
    }
  }
  return (
    <div className="DetailProduct">
      <div className="image_product">
        <ul className="thumbs">
          <li>
            <img
              className="image_list"
              src={zapatillasDetail.image}
              alt={marca.name}
            />
          </li>
        </ul>
        <div className="image__container">
          <img
            className="image"
            src={zapatillasDetail.image}
            alt={zapatillasDetail.name}
          />
        </div>
      </div>
      <div className="detail">
        <div className="marca_name">
          <p>{marca.name}</p>
          <h3>{zapatillasDetail.name}</h3>
        </div>
        <div className="price">
          <p>Online</p>
          <p>S/ {zapatillasDetail.price}</p>
        </div>
        <div className="color">
          <h3>Color</h3>
          <div className="color__container">
            <div className={`color_${color.name} color_settings`}></div>
            {/* <input type="checkbox"/> */}
          </div>
        </div>
        <div className="add_to_cart">
          <div className="counter">
            <button name="less"  onClick={handleAmount}>-</button>
            <input disabled placeholder={amountValue} />
            <button name="plus" onClick={handleAmount}>+</button>
          </div>
          <button onClick={handleAddToCart} className="add_to_cart__button">
            Anadir al carrito
          </button>
        </div>
        <p>{zapatillasDetail.description}</p>
        <p>{category.name}</p>
      </div>
    </div>
  );
};

export { DetailProduct };
