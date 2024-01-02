import '../css/Otp.css';

function Otp() {

    const Otpclick = () => {
        console.log('Otp button clicked');
        window.location.href = '/home';
    }

    const resOtp = () => {
        console.log('Resend Otp button clicked');
    }

    return (
        <div className='Otp-box'>
            <h1 className='Otp-h-1'>Enter OTP </h1>
            <h1 className='Otp-h-2'>Please enter the OTP sent to your Email\Phone number</h1>

            <form className='Otp-form'>
                <div className='textbox'>
                    <input type='text' placeholder='Ex:-1234' className='Otp-input' />
                    <h4 className='Otp-h-3' onClick={resOtp}>Resend OTP</h4>
                </div>
                <div className='Otp-button'>
                    <input type='button' className='Otp-button-1' value='Verify' onClick={Otpclick}/>
                </div>

            </form>

        </div>
    )
}

export default Otp;