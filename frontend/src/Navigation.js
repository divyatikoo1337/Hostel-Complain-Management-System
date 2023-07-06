import classes from './Navigation.module.css';

function Navigation() {
    return <div className={classes.wrapper}>
        <div style={{fontSize: '30px'}}>IIT HOSTEL</div>
        <div className={classes.navigation}>
            <ul>
                <a>Complaints Page</a>
                <a>Profile</a>
            </ul>
        </div>
    </div>
}

export default Navigation;