'use client';

import styles from './CustomForm.module.scss';
import tgappendix from '@images/tgappendix.svg';
import whappendix from '@images/whappendix.svg';
import Image from 'next/image';
import { useState, FormEvent } from 'react';
import send from '@images/send-message.svg';

function CustomForm({ formType }: { formType: string }) {
  const [message, setMessage] = useState('');
  const isTelegram = formType === 'telegram';
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  //   const chatType = `${styles.chat} ${isTelegram ? styles.telegram : ''}`;
  const bubbleType = `${styles.bubble} ${
    isTelegram ? styles.tgbubble : styles.whbubble
  }`;
  const appendixType = isTelegram ? tgappendix : whappendix;
  const appendixClass = `${isTelegram ? styles.tgappendix : styles.whappendix}`;
  const actionType = `${styles.action} ${
    isTelegram ? styles.tgaction : styles.whaction
  }`;
  const circleType = `${styles.circle} ${
    isTelegram ? styles.tgcircle : styles.whcircle
  }`;
  const fieldType = `${styles.text} ${
    isTelegram ? styles.tgtext : styles.whtext
  }`;

  return (
    <div className={styles.chat}>
      <div className={styles.messages}>
        <div className={bubbleType}>
          <div className={styles.bubbleWrap}>
            <p className={styles.text}>
              The Desight team welcomes you, what question interests you?
            </p>
          </div>
          <Image src={appendixType} alt="" className={appendixClass} />
        </div>
      </div>
      <form className={actionType}>
        <textarea
          name="message"
          placeholder="Your message"
          value={message}
          className={fieldType}
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
  );
}
export default CustomForm;
