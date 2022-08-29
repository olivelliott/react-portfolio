import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleFormChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid)
            if(!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        if (!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }


    return (
        <section>
            <h1 data-testid='h1tag'>Contact me</h1>
            <form id="contact-form" onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleFormChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleFormChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleFormChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit' data-testid='submit-btn'>Submit</button>
            </form>
        </section>
    )

}

export default Contact;

// const [formState, setFormState] = useState({ name: '', email: '', message: ''});
// const [errorMessage, setErrorMessage] = useState('');
// const { name, email, message } = formState;

// function handleChange(e) {
//     if (e.target.name === 'email') {
//         const isValid = validateEmail(e.target.value);
//         console.log(isValid)
//         if(!isValid) {
//             setErrorMessage('Your email is invalid');
//         } else {
//             if (!e.target.value.length) {
//                 setErrorMessage(`${e.target.name} is required`);
//             } else {
//                 setErrorMessage('');
//             }
//         }
//     }
//     if (!errorMessage){
//         setFormState({...formState, [e.target.name]: e.target.value})
//     }
// }

// function handleSubmit(e) {
//     e.preventDefault();
//     console.log(formState);
// }
