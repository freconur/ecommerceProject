import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  googleSignInInitiate,
  setUserCurrent,
  setUsers,
} from "../redux/action";
import "./signInWithGoogleModal.css";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const SignInWithGoogleModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const { usersDb } = useSelector((rootReducer) => rootReducer.userReducer);
  useEffect(() => {
    dispatch(setUsers());
  }, []);
  const handleSignInGoogle = () => {
    dispatch(googleSignInInitiate(usersDb));
    setIsOpen(!isOpen);
  };
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="portalOverlay">
      <div className="portalstyles">
        <div onClick={() => setIsOpen(!isOpen)} className="close_modal">cerrar</div>
        <div>
          <p className="popup">Ingresa y descubre todos nuestros productos</p>
        </div>
        <div>
          <div className="button_google" onClick={handleSignInGoogle}>
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ecommerce-eacb4.appspot.com/o/google.png?alt=media&token=b705fb0a-7f90-48a1-9785-8cf6da718007"
                alt="google-icon"
              />
              <span>continuar con google</span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default SignInWithGoogleModal;
