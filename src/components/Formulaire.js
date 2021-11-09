import React, { useState } from 'react';

const Formulaire = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [message, setMessage] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <div className="formulaire">
      <form className="sous-formulaire">
        <h3>Create Account </h3>
        <label>
          Name : <input name="name" type="text" value={name} required />
        </label>
        <label>
          Email :{' '}
          <input
            name="email"
            type="text"
            placeholder="jean@gmail.com"
            value={email}
          />
        </label>
        <label>
          Password: <input name="password" type="passWord" value={passWord} />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            type="textarea"
            // rows="10"
            // cols="50"
            value={message}
            placeholder="write your messages"
          ></textarea>
        </label>
        <input
          className="forminput"
          name="acceptedTerms"
          type="checkbox"
          required
        />
        I accept the terms of service
        <lable></lable>
      </form>
    </div>
  );
};

export default Formulaire;
