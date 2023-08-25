import styles from './BlueDot.module.scss';
import { CSSProperties } from 'react';

export default function BlueDot({ blur }: { blur: CSSProperties }) {
  return <div className={styles.blueDot} style={blur} />;
}
