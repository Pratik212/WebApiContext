import React, {useEffect, useState} from 'react';
// import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './login.css';
import User from '../../../../assets/img/123.png'
import Password from '../../../../assets/img/234.png'
import history from '../@history';

function Login() {

    const initialState = {
            user: '',
            password: ''
    }
    const [formValues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = () => {
        console.log(formValues);
        localStorage.setItem('user',formValues.user);
        localStorage.setItem('password',formValues.password);
        history.push('/loginTable')
            window.location.reload();

    };

    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]:  value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);

    };

    const validate = (values) => {
        let errors = {};
        if (!values.user) {
            errors.user = "Please enter user name";
        }
        if (!values.password) {
            errors.password = "Please enter valid password";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        }
        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submitForm();
        }
    }, [formErrors]);


    return (
        <section>
            <div className='box'>
                <div className='form'>
                    <h2>Login Form</h2>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className='inputBox'>
                            <input
                                type="text"
                                placeholder='Username'
                                name='user'
                                value={formValues.user}
                                onChange={handleChange}
                                />
                            <img src={User} alt="User" width='30px' height='35px'/>
                            {formErrors.user && (
                                <div style={{color: 'white'}} className="error">{formErrors.user}</div>
                            )}
                        </div>

                        <div className='inputBox'>
                            <input
                                type="text"
                                placeholder='Password'
                                name='password'
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            <img src={Password} alt="Password"  width='30px' height='35px'/>
                            {formErrors.password && (
                                <div  style={{color: 'white'}} className="error">{formErrors.password}</div>
                            )}
                        </div>
                        <div className='inputBox'>
                            <input type="submit"/>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )

}

export default Login;

