import { Fragment } from "react";
import Navigation from "../Navigation";
import classes from './ComplaintsPageAdmin.module.css';

const DUMMY_COMPLAINTS = [
    {id: 1, message: 'water shortage', hostel: 'wing-1'},
    {id: 2, message: 'fan not working', hostel: 'wing-1'},
];

function ComplaintsPage() {
    return <Fragment>
        <Navigation />
        <div> 
            <h1 style={{margin: " 0px 530px"}}>Complaints</h1>
            { DUMMY_COMPLAINTS.map(e => <div className={classes.complaintCard}>
                <div className={classes.id}>{e.id}</div>
                <div className={classes.message}>{e.message}</div>
                <div className={classes.hostel}>{e.hostel}</div>
            </div>)}
        </div>
    </Fragment>
}

export default ComplaintsPage;