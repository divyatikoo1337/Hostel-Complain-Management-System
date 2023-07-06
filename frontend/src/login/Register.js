import { Fragment, useState } from "react";
import classes from './Login.module.css'

function Register(props) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function submitHandler(event){
        event.preventDefault();
    }

    return <Fragment>
        <form className={classes.form}>
            <h1>Register!</h1>
            <label htmlFor="userName"> Username</label>
            <input id="userName" type="text" placeholder="Rachel" onChange={(e) => setUserName(e.target.value)}/>
            <label htmlFor="email"> Email ID</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="text" placeholder=" youremail@gmail.com"/>
            <label htmlFor="password"> Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder=" 123@rachel"/>
            <label htmlFor="confirmPassword"> Confirm Password</label>
            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="confirmPassword" type="password" placeholder=" Confirm Password"/>
            <button type="submit" onClick={submitHandler}>Submit</button>
            <button className={classes.linkButton} onClick={() => props.onFormSwitch('login')}>Already have an Account? Login Here!</button>

        </form>
    </Fragment>
}

export default Register;