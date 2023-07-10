import { Form } from 'react-router-dom';
import classes from './ComplaintPageStudent.module.css';
import Navigation from '../Navigation';

function ComplainPageStudent() {
    return <div >
        <Navigation />
        <h2 style={{marginLeft: "540px"}}>File a Complaint.</h2>
        <Form className={classes.complaint_form}>
            <label htmlFor="hostel Name"> Name of the hostel</label>
            <input id="hostelName" placeholder="gandhi wing" type="text"/>
            <label htmlFor="roomNumber"> Room Number</label>
            <input id="roomNumber" placeholder="301" type="text"/>
            <label htmlFor="studentName">Student Name</label>
            <input id="studentName" placeholder="Samay Parat" type="text"/>
            <label htmlFor="phoneNumber"> Phone Number</label>
            <input id="phone Number" placeholder="8096625573" type="number"/>
            <label htmlFor="description"> Description of the problem</label>
            <input id="description" placeholder="The fan is not working" type="text"/>
            <label htmlFor="time"> Time availablility</label>
            <input id="time" placeholder="3:00" type="time"/>
            <label htmlFor="category">Select the Category</label>
            <select id="category">
                <option value={"electricity"}>Electricity</option>
                <option value={"cleanliness"}>Cleanliness</option>
                <option value={"plumbing"}>Plumbing</option>
            </select>
            <button type='submit'>Submit</button>
            
        </Form>
    </div>;
}

export default ComplainPageStudent;