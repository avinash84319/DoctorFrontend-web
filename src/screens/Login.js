import '../css/Login.css';

function Login() {


    const regclick = () => {
        console.log('Register button clicked');
        window.location.href = '/register';
    }

    const loginclick = () => {
        console.log('Login button clicked');
        window.location.href = '/otp';
    }

    return (
        <div className='login-box'>
            <h1 className='login-h-1'>Welcome </h1>
            <h1 className='login-h-2'>Glad to see you!</h1>

            <form className='login-form'>
                <div className='textbox'>
                    <h2 className='login-user-h'>Email Address</h2>
                    <input type='text' placeholder='example@gmail.com' className='login-input' />
                </div>
                <div className='textbox'>
                    <h2 className='login-MobileNO-h'>Mobile No</h2>
                    <input type='MobileNO' placeholder='Ex:- 9465321...' className='login-input' />
                </div>
                <div className='login-button'>
                    <input type='button' className='login-button-1' value='Login' onClick={loginclick}/>
                </div>
                <div className='login-button'>
                    <input type='button' className='login-button-1' value='Register' onClick={regclick}/>
                </div>

            </form>

        </div>
    )
}

export default Login;