import styles from './HeroImage.module.scss';
import Image from 'next/image';
import left from '@images/negativeflow.png';
import right from '@images/positiveflow.png';

export function HeroImage() {
  return (
    <section className={styles.heroimage}>
      <div className={styles.border}>
        <h2>От идеи к реальности. Пиксель за пикселем</h2>
      </div>
      <div className={styles.image}>
        <div className={styles.leftContainer}>
          <Image src={left} alt="left" className={styles.left} />
        </div>
        <div className={styles.rightContainer}>
          <Image src={right} alt="right" className={styles.right} />
        </div>
      </div>
    </section>
  );
}
