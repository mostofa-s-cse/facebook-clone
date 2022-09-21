import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
// import AddIcon from '@mui/icons-material/Add';
import "../../css/login.css"

const Login = (props) => {
    // .....................User Login Function start..................................

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        Navigate('/home');
    }
    
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    // .....................User Login Function End...................................
    return (
        <>

        <div className='login'>
           <div className='loginBody'>
                <div className='loginBodyLeft'>
                    <h2>facebook</h2>
                    <p>Facebook helps you connect and share with the people in your life.</p>
                </div>
                <div className='loginBodyRight'>
                    <h2>facebook</h2>
                    <form onSubmit={handleUserSignIn}>
                        <input type="text" name="email" onBlur={handleEmailBlur} placeholder='Email Address or phone number'/>
                        <input type="password" name="password" onBlur={handlePasswordBlur} placeholder='Password'/>

                        
                        <p style={{ color: 'red', marginBottom:'10px' }}>{error?.message}</p>
                        {
                        loading && <p style={{ color: 'blue', fontWeight:'bolder', marginBottom:'20px' }} >Loading...</p>
                        }

                        <button type="submit" className='submitBtn'>Log In</button>
                        <h5>Forgotten password?</h5>
                        <Link to="/signup"><button type="submit" className='btn'>Create New Account</button></Link>
                    </form>
                    <p style={{ marginTop:'35px'}}><span style={{fontWeight:'bolder'}}>Create a Page</span> for a celebrity, brand or business.</p>
                </div>
            </div>
        </div>







        {/* <div className='wrap-login'>
        <div className='login'>
                <div className='login_left'>
                    <h2>facebook</h2>
                    <p>Facebook helps you connect and share with the people in your life.</p>
                </div>
                <div className='login_right'>
                    <form onSubmit={handleUserSignIn}>
                        <input type="text" name="email" onBlur={handleEmailBlur} placeholder='Email Address or phone number'/>
                        <input type="password" name="password" onBlur={handlePasswordBlur} placeholder='Password'/>
                        <button type="submit" className='submitBtn'>Log In</button>
                        <h5>Forgotten password?</h5>
                        <button type="submit" className='btn' onClick={handleOpen}>Create New Account</button>
                    </form>
                    <p style={{ marginTop:'35px',textAlign:'center'}}><span style={{fontWeight:'bolder'}}>Create a Page</span> for a celebrity, brand or business.</p>
                </div>
            </div>
        </div>  */}
        </>
    );
};

export default Login;