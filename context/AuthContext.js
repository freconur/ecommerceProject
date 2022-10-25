// import { createContext, useContext } from "react";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
// const authContext = createContext();

// export const useAuth = () => {
//   const context = useContext(authContext);
//   return context;
// };

// function AuthProvider ({ children }){

const [user, setUser] = useState({});

useEffect(() => {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(currentUser);
  });
}, []);

const loginWithGoogle = () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.log(error);
  }
};

//   return (
//     <authContext.Provider value={{ user, loginWithGoogle }}>
//       {children}
//     </authContext.Provider>
//   );
// };

// export default AuthProvider
