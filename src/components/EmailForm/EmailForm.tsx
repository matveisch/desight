import styles from './EmailForm.module.scss';
import send from '@images/send-button.svg';
import Image from 'next/image';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

function EmailForm() {
  const SignUpSchema = z.object({
    email: z.string().email(),
    message: z.string().max(4),
  });
  type SignUpSchemaType = z.infer<typeof SignUpSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });
  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        className={styles.input}
        placeholder="Email"
        required
        {...register('email')}
      />
      {errors.email && (
        <span style={{ color: 'red' }}>{errors.email.message}</span>
      )}
      <textarea
        placeholder="Your message"
        className={styles.textarea}
        required
        {...register('message')}
      />
      {errors.message && (
        <span style={{ color: 'red' }}>{errors.message.message}</span>
      )}
      <button type="submit" className={styles.button}>
        <Image src={send} alt="send" className={styles.image} />
      </button>
    </form>
  );
}
export default EmailForm;
