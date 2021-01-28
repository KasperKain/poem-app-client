import React, { useState } from 'react';
import { createUser } from '../../api/userFinder';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = { email, password };
      const response = await createUser(user);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setEmail(e.target.value)} />

      <input onChange={(e) => setPassword(e.target.value)} />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default RegisterForm;
