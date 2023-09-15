import styles from './CustomForm.module.scss';
import tgappendix from '@images/tgappendix.svg';
import whappendix from '@images/whappendix.svg';
import Image from 'next/image';
import { useState, FormEvent, useRef, ChangeEvent } from 'react';
import send from '@images/send-message.svg';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

function CustomForm({ formType }: { formType: string }) {
  const isTelegram = formType === 'telegram';

  const SignUpSchema = z.object({
    message: z.string().max(100),
  });
  type SignUpSchemaType = z.infer<typeof SignUpSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => console.log(data);

 //dynamic textarea

const ref = useRef<HTMLTextAreaElement>(null);

const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
  if (ref.current) {
    ref.current.style.height = 'auto';
    ref.current.style.height = `${e.target.scrollHeight - 30}px`;
  }
};

// dynamic classes

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
  const fieldType = `${styles.input} ${
    isTelegram ? styles.tginput : styles.whinput
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
      <form className={actionType} onSubmit={handleSubmit(onSubmit)}>
        <textarea
          ref={ref}
          rows={1}
          name="message"
          placeholder="Message"
          className={fieldType}
          required
          onChange={(e) => setMessage(e.target.value)}
          onInput={handleInput}
        />
        {/*{errors.message && (*/}
        {/*  <span style={{ color: 'red' }}>{errors.message.message}</span>*/}
        {/*)}*/}
        <button type="submit" className={styles.button}>
          <div className={circleType}>
            <Image src={send} alt="send" className={styles.image} />
          </div>
        </button>
      </form>
    </div>
  );
}
export default CustomForm;
