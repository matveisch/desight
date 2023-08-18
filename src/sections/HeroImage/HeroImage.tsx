
import styles from './HeroImage.module.scss';
import Image from 'next/image';
import left from '@images/negativeflow.png';
import right from '@images/positiveflow.png';

export function HeroImage() {
  return (
    <section className={styles.heroimage}>
        <h2>От идеи к реальности. Пиксель за пикселем</h2>
       <div className={styles.image}>
        <Image src={left} alt='left' className={styles.left} />
        <Image src={right} alt='right' className={styles.right}/>
       </div>
    </section>
  );
}