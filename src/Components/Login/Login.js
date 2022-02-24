import React, { useState } from 'react'
import { login } from '../../features/userSlice';
import { auth } from '../../Firebase';
import { useDispatch } from 'react-redux';
import './Login.css'

function Login() {

    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.id,
                    displayName:userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL,
                }))
            })
    }

    const register = () => {
        if (!name) {
            return alert('Please enter your name')
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoUrl: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic
                        }))
                    })
            })
            .catch((error) => alert(error));
    }

    return (
        <div className='login'>
            <img src='https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png' alt='' />
            <div className='login_page'>
                <p className='login_top_heading'>Make the most of your Professional life</p>
                <form>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name' />
                    <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" placeholder='Profile pic' />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password (6 or more characters)' />
                    <button type='submit' onClick={loginToApp}>Continue</button>
                </form>
                <p className='login_bottom'>Already on LinkedIn?
                    <span className='sign_in' onClick={register}> Sign In </span>
                </p>
            </div>
        </div>
    )
}

export default Login