import initFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// init firebase
initFirebase();


const useFirebase = () => {
    const auth = getAuth();
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
            })
    }
    return {
        createUser
    };
};

export default useFirebase;