import React from 'react';
import history from "../@history/@history";

function LoginTable(){

    const handleSubmitData = (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        localStorage.removeItem('password');
        history.push('/login')
        window.location.reload();
    };


    return(
        <section>
            <div className='box'>
                <div className='form'>
                    <h2>Login User</h2>
                    <form onSubmit={handleSubmitData}>
                        <div className='inputBox'>
                          UserName <br/> <span style={{color: 'white'}}>{localStorage.getItem('user')}</span>
                        </div>
                        <div className='inputBox'>
                          Password <br/> <span style={{color: 'white'}}>{localStorage.getItem('password')}</span>
                        </div>
                        <div className='inputBoxes'>
                            <button style={{background:'white'}} className='btn' type="submit">
                                Logout
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginTable