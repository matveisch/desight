import styles from './OneStepMobile.module.scss';

type PropsType = {
  num: number;
  last?: boolean;
  header: string;
  description: string;
};

export default function OneStepMobile(props: PropsType) {
  const { num, last, description, header } = props;

  return (
    <div className={styles.oneStepMobile}>
      <div className={styles.numberContainer}>
        {!last && <div className={styles.line} />}
        <div className={styles.number}>
          <p>{num}</p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <h5>{header}</h5>
        <text className="description">{description}</text>
      </div>
    </div>
  );
}
