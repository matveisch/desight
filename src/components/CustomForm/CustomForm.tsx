'use client';

import styles from './CustomForm.module.scss';
import appendix from '@images/appendix.svg';
import Image from 'next/image';
import { useState, FormEvent } from 'react';
import send from '@images/send-message.svg';

function CustomForm({ formType } : {formType: string}) {
  const [message, setMessage] = useState('');
  const isTelegram = formType === 'telegram'; 
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

//   const chatType = `${styles.chat} ${isTelegram ? styles.telegram : ''}`;
  const bubbleType = `${styles.bubble} ${isTelegram ? styles.tgbubble : styles.whbubble}`;
  const appendixType = `${isTelegram ? styles.tgappendix : styles.appendix}`;
  const actionType = `${styles.action} ${isTelegram ? styles.tgaction : ''}`;
  const circleType = `${styles.circle} ${isTelegram ? styles.tgcircle : ''}`;


  return (
    <div className={styles.chat}>
      <div className={bubbleType}>
        <p className={styles.text}>
          The Desight team welcomes you, what question interests you?
        </p>
        <Image src={appendix} alt="" className={appendixType}/>
      </div>
      <div className={actionType}>
        <form className={styles.sendMessage}>
          <textarea
            name="message"
            placeholder="Your message"
            value={message}
            className={styles.textarea}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className={styles.button} disabled>
            <div className={circleType}>
            <Image src={send} alt="send" className={styles.image} />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
export default CustomForm;
