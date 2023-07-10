import { Link, NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

function Navigation() {
    return <div className={classes.wrapper}>
        <div style={{fontSize: '30px'}}>IIT HOSTEL</div>
        <nav>
        <div className={classes.navigation}>
            <ul>
                <NavLink to="/complaintsPageAdmin">Complaints Page</NavLink>
                <Link>Profile</Link>
                <Link>Login/Logout</Link>
            </ul>
        </div>
        </nav>
    </div>
}

export default Navigation;