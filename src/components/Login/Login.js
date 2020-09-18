import React, { useContext, useState } from 'react';
import './Login.css';
import facebook from '../../images/facebook.png';
import google from '../../images/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    success: false
  })
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  const handleGoogleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
      .then(result => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email: email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      }).catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

  }

  const handleFacebookSignIn = () => {
    firebase.auth().signInWithPopup(fbProvider)
      .then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email: email };
        setLoggedInUser(signedInUser);
        history.replace(from);
        console.log(user);
        // ...
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorMessage);
        // ...
      });

  }

  const [newUser, setNewUser] = useState(false);
  const handleInput = (event) => {
    console.log(event.target.name, event.target.value);

    let isFieldValid = true;
    if (event.target.name === 'firstName') {
      isFieldValid = /^[A-Za-z]+/.test(event.target.value);
    }
    if (event.target.name === 'lastName') {
      isFieldValid = /^[A-Za-z]+/.test(event.target.value);
    }
    if (event.target.name === 'email') {
      isFieldValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(event.target.value);
    }
    if (event.target.name === 'password') {
      isFieldValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(event.target.value);
    }
    if (event.target.name === 'confirmPassword') {
      isFieldValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(event.target.value);
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }
  const handleFormSubmit = (event) => {
    if (newUser && user.email && (user.password === user.confirmPassword)) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
        })
        .catch(error => {
          // Handle Errors here.
          const errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setUser(newUserInfo);
          console.log(errorMessage)
          // ...
        });
    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
        })
        .catch(error => {
          const errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setUser(newUserInfo);
          console.log(errorMessage)
        });
    }
    event.preventDefault();
  }

  return (
    <div className="form-container">
      <form className="form" id="form" onSubmit={handleFormSubmit}>
        <div className="header">
          {newUser ? <h2>Create an account</h2>
            : <h2>Login</h2>}
        </div>
        {newUser && <div className="form-field succes">
          <input name="firstName" onBlur={handleInput} type="text" placeholder="First Name" id="firstName" />
          <i className="fa fa-check-circle" aria-hidden="true"></i>
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
          <small>Error Message...</small>
        </div>}

        {newUser && <div className="form-field succes">
          <input name="lastName" type="text" onBlur={handleInput} placeholder="Last Name" id="lastName" />
          <i className="fa fa-check-circle" aria-hidden="true"></i>
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
          <small>Error Message...</small>
        </div>}
        <div className="form-field">
          <input name="email" type="email" onBlur={handleInput} placeholder="Email" id="email" />
          <i className="fa fa-check-circle" aria-hidden="true"></i>
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
          <small>Error Message...</small>
        </div>

        <div className="form-field">
          <input name="password" type="password" onBlur={handleInput} placeholder="Passowrd" id="password" />
          <i className="fa fa-check-circle" aria-hidden="true"></i>
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
          <small>Error Message...</small>
        </div>

        {newUser && <div className="form-field">
          <input name="confirmPassword" type="password" onBlur={handleInput} placeholder="Confrim Passowrd" id="confirm-password" />
          <i className="fa fa-check-circle" aria-hidden="true"></i>
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
          <small>Error Message...</small>
        </div>}
        {newUser ? <input className="submit-button" type="submit" value="Create an account" />
          : <Link to={"/hotels"}><input className="submit-button" type="submit" value="Login" /></Link>}

        {
          newUser
            ?
            <small>Already have an account?<input type="button" onClick={() => setNewUser(!newUser)} value="Login" /> </small>
            :
            <small>Don't have an account? <input type="button" onClick={() => setNewUser(!newUser)} value="Create an account" /></small>
        }
        <p style={{color: 'red'}}>{user.error}</p>
        {user.success && <p>User {newUser ? 'Created' : 'LogedIn'} successfuly</p>}
      </form>
      <small>Or</small>
      <div>
        <button className="social-login" onClick={handleFacebookSignIn}>
          <img className="facebook-icon" src={facebook} alt="" />
          <p>Continue with Facebook</p>
        </button>
      </div>
      <br />
      <div>
        <button className="social-login" onClick={handleGoogleSignIn}>
          <img className="google-icon" src={google} alt="" />
          <p>Continue with Google</p>
        </button>
      </div>
      <br />
    </div>
  );
};

export default Login;