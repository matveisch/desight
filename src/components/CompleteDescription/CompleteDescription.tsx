import Image from 'next/image';
import styles from './CompleteDescription.module.scss';
import arrow from '@images/arrow-link.svg';

export default function CompleteDescription() {
  return (
    <div className={styles.completeDescription}>
      <h3>From $999</h3>
      <h2>Complete Web Solution</h2>
      <p className={styles.text}>
        Наш пакет услуг охватывает весь спектр разработки веб-сайтов, от
        креативного дизайна до разработки и поддержки, чтобы вы могли
        сосредоточиться на своем бизнесе.
      </p>
      <button>
        <p>Узнать подробности</p>
        <Image src={arrow} alt={'arrow'} />
      </button>
    </div>
  );
}
