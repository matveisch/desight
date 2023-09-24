import styles from './EmailForm.module.scss';
import send from '@images/send-button.svg';
import Image from 'next/image';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction } from 'react';

interface PropsType {
  dict: any;
  setHasError: Dispatch<SetStateAction<boolean>>;
}

function EmailForm({ dict, setHasError }: PropsType) {
  const SignUpSchema = z.object({
    email: z.string().email().nonempty(),
    message: z.string().max(100),
  });
  type SignUpSchemaType = z.infer<typeof SignUpSchema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
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

      if (!res.ok) {
        setHasError(true);
      } else {
        // setSentSuccessfully(true);
        reset();
      }
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
    }
  }

  if (errors.email || errors.message) {
    setHasError(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        className={styles.input}
        placeholder={dict.footer.email}
        required
        {...register('email')}
      />
      {/*{errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}*/}
      <textarea
        placeholder={dict.footer.message}
        className={styles.textarea}
        required
        {...register('message')}
      />
      {/*{errors.message && (*/}
      {/*  <span style={{ color: 'red' }}>{errors.message.message}</span>*/}
      {/*)}*/}
      <button type="submit" className={styles.button}>
        <Image src={send} alt="send" className={styles.image} />
      </button>
    </form>
  );
}
export default EmailForm;
