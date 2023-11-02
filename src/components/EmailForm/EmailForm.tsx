import styles from './EmailForm.module.scss';
import send from '@images/send-button.svg';
import Image from 'next/image';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction } from 'react';

interface PropsType {
  dict: any;
  setHasNotification: Dispatch<SetStateAction<boolean>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setBeenSent: Dispatch<SetStateAction<boolean>>;
}

function EmailForm({ dict, setHasNotification, setErrorMessage, setBeenSent }: PropsType) {
  const SignUpSchema = z.object({
    email: z.string().email(),
    message: z.string().max(100),
  });
  type SignUpSchemaType = z.infer<typeof SignUpSchema>;
  const { register, handleSubmit, reset } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });
  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => sendEmail(data);

  async function sendEmail(data: SignUpSchemaType) {
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        body: JSON.stringify(data, null, 2),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setHasNotification(true);

      if (!res.ok) {
        setBeenSent(false);
      } else {
        reset();
        setBeenSent(true);
      }

      setTimeout(() => {
        setHasNotification(false);
      }, 2500);
    } catch (e) {
      if (e instanceof Error) setErrorMessage(e.message);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>Email</label>
      <input
        type="email"
        className={styles.input}
        placeholder={dict.footer.email}
        required
        {...register('email')}
      />
      <label className={styles.label}>Message</label>
      <textarea
        placeholder={dict.footer.message}
        className={styles.textarea}
        required
        {...register('message')}
      />
      <button type="submit" className={styles.button}>
        <Image src={send} alt="send" className={styles.image} />
      </button>
    </form>
  );
}
export default EmailForm;
