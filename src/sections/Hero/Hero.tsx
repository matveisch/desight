import styles from './Hero.module.scss';
import Social from '@/components/Social/Social';
import { social } from '@/utils/data/data';
import { motion } from 'framer-motion';
import { HeroAnimation } from '@/components/heroAnimation/HeroAnimaton';

export function Hero() {
  const headerText = 'Clear sight';
  return (
    <section className={styles.hero}>
      <div className={styles.herowrap}>
        <div className={styles.text}>
          <h3>Full cycle web agency</h3>
          <h1 className={styles.title}>
            Clear Sight
            <br />
            Bright Future
          </h1>
          <div className={styles.social}>
            {social.map((icon, index) => (
              <Social
                key={index}
                name={icon.name}
                src={icon.srcBlue}
                link={icon.link}
              />
            ))}
          </div>
        </div>
        <div className={styles.animation}>
          <div className={styles.animationWrap}>
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
