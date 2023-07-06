import { Fragment } from "react";

const DUMMY_COMPLAINTS = [
    {id: 1, message: 'water shortage', hostel: 'wing-1'},
    {id: 2, message: 'fan not working', hostel: 'wing-1'},
];

function ComplaintsPage() {
    return <Fragment>
        {DUMMY_COMPLAINTS.map(e => <li>{e.message}</li>)}
        {/* <h1>Complaints page</h1> */}
    </Fragment>
}

export default ComplaintsPage;