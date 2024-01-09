import '../css/Register.css';
import React, { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [sex, setSex] = useState('Male');
    const [dob, setDob] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [qualification, setQualification] = useState('');
    const [experience, setExperience] = useState('');
    const [about, setAbout] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log({name,id,email,mobile,sex,dob,specialization,experience,about})
    };

    const handleIdChange = (event) => {
        setId(event.target.value);
        console.log({name,id,email,mobile,sex,dob,specialization,experience,about})
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log({name,id,email,mobile,sex,dob,specialization,experience,about})
    };

    const handleMobileChange = (event) => {
        setMobile(event.target.value);
        console.log({name,id,email,mobile,sex,dob,specialization,experience,about})
    };

    const handleDobChange = (event) => {
        setDob(event.target.value);
        console.log({name,id,email,mobile,sex,dob,specialization,experience,about})
    };

    const handleSpecializationChange = (event) => {
        setSpecialization(event.target.value);
        console.log({name,id,email,mobile,sex,dob,specialization,experience,about})
    };

    const handleQualificationChange = (event) => {
        setQualification(event.target.value);
    }

    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
        console.log({name,id,email,mobile,sex,dob,specialization,experience,about})
    };

    const handleAboutChange = (event) => {
        setAbout(event.target.value);
        console.log({name,id,email,mobile,sex,dob,specialization,experience,about})
    };

    const handleSubmitClick = () => {
        
    };



    return (
        <div className='register'>
            <div className="accountimg"><img src='/account.png' className='accountimg'></img></div>

            <form className='reg-form'>
                <div className='register-box'>

                    <div className='textbox-name'>
                        <h2 className='reg-name-h'>Name</h2>
                        <input type='text' placeholder='Full Name' className='reg-input' value={name} onChange={handleNameChange} />
                    </div>
                    <div className='textbox-id'>
                        <h2 className='reg-name-h'>Doctor Id</h2>
                        <input type='text' placeholder='Ex:- UHS@XYZ' className='reg-input' value={id} onChange={handleIdChange} />
                    </div>
                    <div className='textbox-email'>
                        <h2 className='reg-name-h'>Email</h2>
                        <input type='email' placeholder='example@gmail.com' className='reg-input' value={email} onChange={handleEmailChange} />
                    </div>

                    <div className='textbox-mobile'>
                        <h2 className='reg-name-h'>Mobile No</h2>
                        <input type='MobileNO' placeholder='Ex:- 9465321...' className='reg-input' value={mobile} onChange={handleMobileChange} />
                    </div>

                    <div className='textbox-gender'>
                        <h2 className='reg-name-h'>Sex</h2>
                        <div className='gender'>
                            <input type='button' className={sex==='Male' ? 'gender-button-selected':'gender-button'} value='Male' onClick={() => setSex('Male')} />
                            <input type='button' className={sex==='Female' ? 'gender-button-selected':'gender-button'} value='Female' onClick={() => setSex('Female')} />
                        </div>
                    </div>

                    <div className='date0fbirth'>
                        <h2 className='reg-name-h'>Date of Birth</h2>
                        <div className='date'>
                            <img src='/calender.png' className='calender-img'></img>
                            <input type='date' min="1950-03-18" max="2007-03-18" className='reg-input-date' placeholder='Date-of-birth' value={dob} onChange={handleDobChange} />
                        </div>
                    </div>

                    <div className='specialization'>
                        <h2 className='reg-name-h'>Specialization</h2>
                        <select className='reg-input' value={specialization} onChange={handleSpecializationChange}>
                            <option value=''>Select</option>
                            <option value='Cardiology'>Cardiology</option>
                            <option value='Dermatology'>Dermatology</option>
                            <option value='Neurology'>Neurology</option>
                            <option value='Oncology'>Oncology</option>
                            <option value='Orthopedics'>Orthopedics</option>
                            <option value='Pediatrics'>Pediatrics</option>
                            <option value='Psychiatry'>Psychiatry</option>
                            <option value='Urology'>Urology</option>
                            <option value='Others'>Others</option>
                        </select>
                    </div>

                    <div className='qualification'>
                        <h2 className='reg-name-h'>Qualification</h2>
                        <input type='text' value={qualification} onChange={handleQualificationChange} placeholder='Ex:- MBBS,MD' className='reg-input' />
                    </div>

                    <div className='Year-of-experience'>
                        <h2 className='reg-name-h'>Years of Experience</h2>
                        <select className='reg-input' value={experience} onChange={handleExperienceChange}>
                            <option value=''>Select</option>
                            <option value='Intern'>Intern</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='More than 5'>More than 5</option>
                        </select>
                    </div>

                    <div className='about'>
                        <h2 className='reg-name-h'>About</h2>
                        <textarea className='reg-input-about' placeholder='Write about yourself' value={about} onChange={handleAboutChange}></textarea>
                    </div>

                    <div className='submit'>
                        <input type='button' className='submit-button' value='Register' onClick={handleSubmitClick} />
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Register;