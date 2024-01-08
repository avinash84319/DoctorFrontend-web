import '../css/Register.css';

function Register(){


    const Submitclick = () => {
        window.location.href = '/Otp';
    }

    return (
        <div className='register'>
            <div className="accountimg"><img src='/account.png' className='accountimg'></img></div>

        <form className='reg-form'>
        <div className='register-box'>
            
                <div className='textbox-name'>
                    <h2 className='reg-name-h'>Name</h2>
                    <input type='text' placeholder='Full Name' className='reg-input' />
                </div>
                <div className='textbox-id'>
                    <h2 className='reg-name-h'>Doctor Id</h2>
                    <input type='text' placeholder='Ex:- UHS@XYZ' className='reg-input' />
                </div>
                <div className='textbox-email'>
                    <h2 className='reg-name-h'>Email</h2>
                    <input type='email' placeholder='example@gmail.com' className='reg-input' />
                </div>

                <div className='textbox-mobile'>
                    <h2 className='reg-name-h'>Mobile No</h2>
                    <input type='MobileNO' placeholder='Ex:- 9465321...' className='reg-input' />
                </div>

                <div className='textbox-gender'>
                    <h2 className='reg-name-h'>Sex</h2>
                    <div className='gender'>
                        <input type='button' className='gender-button' value='Male' />
                        <input type='button' className='gender-button' value='Female' />
                    </div>
                </div>

                <div className='date0fbirth'>
                    <h2 className='reg-name-h'>Date of Birth</h2>
                    <div className='date'>
                    <img src='/calender.png' className='calender-img'></img>
                    <input type='date' min="1950-03-18" max="2007-03-18" className='reg-input-date' placeholder='Date-of-birth'/>
                    </div>
                </div>

                <div className='specialization'>
                    <h2 className='reg-name-h'>Specialization</h2>
                    <select className='reg-input'>
                        <option value=''>Select</option>
                        <option value=''>Cardiology</option>
                        <option value=''>Dermatology</option>
                        <option value=''>Neurology</option>
                        <option value=''>Oncology</option>
                        <option value=''>Orthopedics</option>
                        <option value=''>Pediatrics</option>
                        <option value=''>Psychiatry</option>
                        <option value=''>Urology</option>
                        <option value=''>Others</option>
                    </select>
                </div>

                <div className='Year-of-experience'>
                    <h2 className='reg-name-h'>Year of Experience</h2>
                    <select className='reg-input'>
                    <option value=''>Select</option>
                    <option value=''>Intern</option>
                    <option value=''>1</option>
                    <option value=''>2</option>
                    <option value=''>3</option>
                    <option value=''>4</option>
                    <option value=''>5</option>
                    <option value=''>More than 5</option>
                    </select>
                </div>

                <div className='about'>
                    <h2 className='reg-name-h'>About</h2>
                    <textarea className='reg-input-about' placeholder='Write about yourself'></textarea>
                </div>

                <div className='submit'>
                    <input type='button' className='submit-button' value='Register' onClick={Submitclick}/>
                </div>
        
        </div>
        </form>
        </div>
    )
}

export default Register;