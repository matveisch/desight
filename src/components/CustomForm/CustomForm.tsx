import styles from './CustomForm.module.scss';
import tgappendix from '@images/tgappendix.svg';
import whappendix from '@images/whappendix.svg';
import Image from 'next/image';
import { useRef, ChangeEvent } from 'react';
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
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const { ref, ...rest } = register('message');
  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${e.target.scrollHeight - 30}px`;

      if (inputRef.current.style.height === `${160}px`) {
        inputRef.current.style.overflowY = 'auto';
      } else if (inputRef.current.style.height === `${32}px`) {
        inputRef.current.style.overflowY = 'hidden';
      }
    }
  };

  return (
    <div className={styles.chat}>
      <div className={styles.messages}>
        <div className={`${styles.bubble} ${isTelegram ? styles.tgbubble : styles.whbubble}`}>
          <div className={styles.bubbleWrap}>
            <p className={styles.text}>
              The Desight team welcomes you, what question interests you?
            </p>
          </div>
          <Image
            src={isTelegram ? tgappendix : whappendix}
            alt=""
            className={`${isTelegram ? styles.tgappendix : styles.whappendix}`}
          />
        </div>
      </div>
      <form
        className={`${styles.action} ${isTelegram ? styles.tgaction : styles.whaction}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          {...rest}
          ref={(e) => {
            ref(e);
            inputRef.current = e;
          }}
          rows={1}
          name="message"
          placeholder="Message"
          className={`${styles.input} ${isTelegram ? styles.tginput : styles.whinput}`}
          required
          onInput={handleInput}
        />
        {/*{errors.message && (*/}
        {/*  <span style={{ color: 'red' }}>{errors.message.message}</span>*/}
        {/*)}*/}
        <button type="submit" className={styles.button}>
          <div className={`${styles.circle} ${isTelegram ? styles.tgcircle : styles.whcircle}`}>
            <Image src={send} alt="send" className={styles.image} />
          </div>
        </button>
      </form>
    </div>
  );
}
export default CustomForm;
