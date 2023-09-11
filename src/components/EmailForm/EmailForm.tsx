'use client';

import styles from './EmailForm.module.scss';
import { useState, FormEvent } from 'react';
import send from '@images/send-button.svg';
import Image from 'next/image';

function EmailForm() {

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
        <button type='submit' className={styles.button} disabled>
            <Image src={send} alt='send' className={styles.image} />
        </button>
    </form>
  );
}
export default EmailForm;