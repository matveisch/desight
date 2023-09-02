'use client';

import styles from './Form.module.scss';
import { useState, FormEvent } from 'react';


function Form() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
   
        <input
          type="email"
          name="email"
          className={styles.input}
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
       
        />
     
        <textarea
          name="message"
          placeholder="Your message"
          value={message}
          className={styles.textarea}
          required
          onChange={(e) => setMessage(e.target.value)}
       
        />

    </form>
  );
}
export default Form;
