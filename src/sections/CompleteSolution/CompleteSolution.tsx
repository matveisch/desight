import styles from './CompleteSolution.module.scss';
import CompleteDescription from '@components/CompleteDescription/CompleteDescription';
import { SpinAnimation } from '@components/spinAnimation/SpinAnimation';

export default function CompleteSolution() {
  return (
    <div className={styles.completeSolution}>
      <div className={styles.header}>
        <CompleteDescription />
        <SpinAnimation />
      </div>
    </div>
  );
}
