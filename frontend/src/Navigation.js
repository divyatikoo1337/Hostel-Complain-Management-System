import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

function Navigation() {
    return <div className={classes.wrapper}>
        <div style={{fontSize: '30px'}}>IIT HOSTEL</div>
        <div className={classes.navigation}>
            <ul>
                <Link to={'/complaintsPage'}>Complaints Page</Link>
                <Link>Profile</Link>
            </ul>
        </div>
    </div>
}

export default Navigation;