import { Fragment, useState } from "react";
import Login from "./login/Login";
import Register from './login/Register'

function App() {
  const[currentForm, setCurrentForm] = useState('login');

   const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

  return (
    <Fragment>
      {currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>}
    </Fragment>
  );
}

export default App;
