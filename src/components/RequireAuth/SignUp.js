import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, sendEmailVerification,updateProfile } from "firebase/auth";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import "../../css/signup.css"
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const verifyEmail = () => {
        
        sendEmailVerification(auth.currentUser)
        .then(() => {
            // Email verification sent!
            // ...
        }).catch(function(error){
            // An error happened.
        });
}   
    const handleNameBlur = event =>{
        setName(event.target.value);
    }
    console.log(name);
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        verifyEmail();
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        
        if(password !== confirmPassword){
            setError('Your two passwords did not match');
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer');
            return;
        }
        
        createUserWithEmailAndPassword(email, password)
       .then(()=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            navigate('/');
          }).catch((error) => {
            // An error occurred
            const success = error.success
            // ...
          });
          
       })
    }
    return (
        <>
                <div className='signUp' >
                    <form  onSubmit={handleCreateUser}>
                        <div className='signUpHeading'>
                            <div className='signUpHeadingLeft'>
                                <h2>Sign Up</h2>
                                <p>It's quick and easy.</p>
                            </div>
                           <Link to="/">
                            <IconButton>
                                    <CloseIcon/>
                                </IconButton>
                           </Link>
                        </div>
                        <div className='signUpBody'>
                                <input type="text" onChange={handleNameBlur} id="name" placeholder="Name" required />
                                
                                <input type="email"  onChange={handleEmailBlur} id="email" placeholder="Email address" required />
                                
                                <input type="password" onChange={handlePasswordBlur} id="password" placeholder="Password" required />
                                <p style={{color: 'red'}}>{error}</p>
                                <input type="password" onChange={handleConfirmPasswordBlur} id="confirmPassword" placeholder="Confirm Password" required />
                                {
                                    user && <p style={{ color: '#4fb666', fontWeight:'bolder', fontSize:'20px', marginBottom:'20px',textAlign:'center' }} >Successfully Login</p>
                                }
                                <button type="submit" className='submitBtn'> Sign Up</button>
                        </div>
                    </form>
                </div>
        </>
    );
};

export default SignUp;