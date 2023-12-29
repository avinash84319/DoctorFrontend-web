import { Link } from 'react-router-dom';
import '../css/Appointment.css';

function Appointment() {

    const arr = [
        {name: "avinash"},
        {name: "subbu"},
        {name: "dixth"},
        {name: "sanjay"}
    ]

    const Patients = () => {
        return arr.map((patient) => {
            return <div className='patient'>{patient.name}</div>
        })
    }

    return (
        <div className="appointment">
            <div className='queue'>
                <Patients />
            </div>
            <div className='navbar'>
                <Link to='/home' className='nav-link'>Home</Link>
                <Link to='/com' className='nav-link'>Reception</Link>
                <Link to='/cal' className='nav-link'>Calender</Link>
            </div>
            <div className="main">
                <div className="prescription">
                    <h1>Prescription</h1>
                    <input type='button' value='Send' className='submit-presc'/>
                </div>
                <div className='medicines'>
                    <div className='medicine-search-div'>
                        <input type="text" placeholder="Search Medicine" className='medicine-search'/>
                    </div>
                </div>
                <div className='medical-history'>
                    <h1>Medical History</h1>
                </div>
                <div className='analysis'>
                    <h1>Analysis</h1>
                </div>
            </div>
        </div>
    );
}

export default Appointment;