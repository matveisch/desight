
import styles from './Hero.module.scss';
import Social from '@/components/Social/Social';
import { social } from '@/utils/data/data';

export function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.text}>
            <h3>Full cycle web agency</h3>
            <h1 className={styles.title}>Чистый Взгляд <br />
                Светлое Будущее
            </h1>
            <div className={styles.social}>
                {social.map((icon, index) => (
                    <Social
                    key={index}
                    name={icon.name}
                    src={icon.src}
                    link={icon.link} />
                ))}
            </div>
        </div>
        <div className={styles.animation}>
            ///
        </div>
    </section>
  );
}