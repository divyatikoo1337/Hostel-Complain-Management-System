import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import {useState} from 'react';
import Login from './login/Login';
import Register from './login/Register';

function RootLayout() {
    const[currentForm, setCurrentForm] = useState('login');

   const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return <>
        <Navigation />
        <main>
            {currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>}
            <Outlet />
        </main>
    </>
}

export default RootLayout;