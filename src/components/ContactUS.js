import React, { useState } from 'react';
import axios from 'axios';
import '../assets/contact.css';
const ContactUS = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a data object with the form values
    const data = {
      name,
      email,
      phone
    };

    // Send the data to Firebase using a POST request
    axios.post('https://react-firebase-46dc6-default-rtdb.firebaseio.com/contact.json', data)
      .then((response) => {
        console.log('Data stored successfully!');
        // Reset the form
        setName('');
        setEmail('');
        setPhone('');
      })
      .catch((error) => {
        console.error('Error storing data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className='contactContainer'>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUS;
