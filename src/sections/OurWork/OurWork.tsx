import WorkGrid from '@components/WorkGrid/WorkGrid';
import styles from './OurWork.module.scss';

export default function OurWork() {
  return (
    <section className={styles.ourWork}>
      <div className={styles.gridContainer}>
        <WorkGrid />
      </div>
    </section>
  );
}
