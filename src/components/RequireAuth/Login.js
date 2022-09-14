import { IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
// import AddIcon from '@mui/icons-material/Add';
import "../../css/login.css"

const Login = () => {
    const[open, setOpen] = useState(false)
    const handleClose=()=>{
        setOpen(false)
    }
    const handleOpen=()=>{
        setOpen(true)
    }
    return (
        <>
        <Modal open={open}>
                <div className='signUp_modal_pop' >
                    <form>
                        <div className='signUp_modal_heading'>
                            <div className='signUp_modal_headingLeft'>
                                <h2>Sign Up</h2>
                                <p>It's quick and easy.</p>
                            </div>
                            <IconButton onClick={handleClose}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                        <div className='signUp_modal_body'>
                                <input type="text" name="name" placeholder="Name" required />
                                <input type="email" name="email" placeholder="Email address" required />
                                <input type="password" name="" placeholder="Password" required />
                                <input type="confirmPassword" name="" placeholder="Confirm Password" required />
                                <button type="submit" className='submitBtn'> Sign Up</button>
                        </div>
                    </form>
                </div>
        </Modal>
        <div className='login_wrapper'>
            <div className='login'>
                <div className='login_left'>
                    <h2>facebook</h2>
                    <p>Facebook helps you connect and share with the people in your life.</p>
                </div>
                <div className='login_right'>
                    <form>
                        <input type="text" name="email"  placeholder='Email Address or phone number'/>
                        <input type="password" name="password"  placeholder='Password'/>
                        <button type="submit" className='submitBtn'>Log In</button>
                        <h5>Forgotten password?</h5>
                        <button type="submit" className='btn' onClick={handleOpen}>Create New Account</button>
                    </form>
                    <p style={{ marginTop:'35px',textAlign:'center'}}><span style={{fontWeight:'bolder'}}>Create a Page</span> for a celebrity, brand or business.</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;