import styles from './BlueLine.module.scss';

type BlueLineProps = {
  width: number;
};

export default function BlueLine(props: BlueLineProps) {
  const { width } = props;

  return <div className={styles.line} style={{ width: `${width}px` }} />;
}
