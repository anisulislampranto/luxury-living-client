import React, { useContext } from 'react';
import { initializeApp } from 'firebase/app'; 
import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import firebaseConfig from './Firebase/Firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css'


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
  
    const app = initializeApp(firebaseConfig)
    const handleGoogleSignIn =()=>{
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            const {displayName, email, photoURL} = user;
            const signedInUser =  {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setLoggedInUser(signedInUser)
            history.replace(from);
            
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential)
        });
    }

    return (
        <div className='text-center' style={{marginTop: '15%'}}>
            <img width='100px' height='40px' src={logo} alt="" />
            <div className='my-5'>
                <h4>Log In With</h4>
                <button className='logIn-btn' onClick={handleGoogleSignIn}> <FontAwesomeIcon icon={faGoogle} /> Continue with Google </button>
            </div>
        </div>
    );
};

export default Login;