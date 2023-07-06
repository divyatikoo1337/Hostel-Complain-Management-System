import { Fragment, useState } from "react";
import Navigation from "../Navigation";
import classes from './Login.module.css'

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    function submitHandler(event){
        event.preventDefault();
    }

    return <Fragment>
        <Navigation />
        <form className={classes.form}> 
            <label htmlFor="email"> Email ID</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="text" placeholder=" Email ID"/>
            <label htmlFor="password"> Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder=" Password"/>
            <button type="submit" onClick={submitHandler}>Submit</button>
            <button className={classes.linkButton} onClick={() => props.onFormSwitch('regsiter')}>Dont have an account? Sign Up now!</button>
        </form>
    </Fragment>
}

export default Login;