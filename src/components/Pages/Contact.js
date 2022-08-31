import React, { useState } from "react";
import { validateEmail, capitalizeFirstLetter } from "../../utils/helpers";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Center,
  Box
} from "@chakra-ui/react";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleFormChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(capitalizeFirstLetter(`${e.target.name} is required.`));
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <Box backgroundColor='navy' fontFamily='body'>
      <h1>Contact me</h1>
      <Center>
        <form onSubmit={handleFormSubmit}>
        <FormControl isRequired maxW="65%" pt={5}>
          <FormLabel pt={5}>Name</FormLabel>
          <Input
            placeholder="Your Name"
            type="name"
            name="name"
            defaultValue={name}
            onBlur={handleFormChange}
          />

          <FormLabel pt={5}>Email address</FormLabel>
          <Input
            placeholder="Your Email"
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleFormChange}
          />

          <FormLabel pt={5}>Message:</FormLabel>
          <Textarea
            placeholder="Type your message here"
            type="message"
            name="message"
            defaultValue={message}
            onBlur={handleFormChange}
          />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button
            mt={4}
            type="submit"
          >
            Submit
          </button>

          {/* <button type='submit' data-testid='submit-btn'>Submit</button> */}
        </FormControl>
        </form>
      </Center>

      {/* <form id="contact-form" onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleFormChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleFormChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleFormChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit' data-testid='submit-btn'>Submit</button>
            </form> */}
    </Box>
  );
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
