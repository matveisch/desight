import styles from './OneStep.module.scss';
import BlueDot from '@components/BlueDot/BlueDot';

type PropsType = {
  num: number;
  last?: boolean;
  first?: boolean;
  header: string;
  description: string;
};

export default function OneStep(props: PropsType) {
  const { num, last, first, header, description } = props;

  return (
    <div className={styles.oneStep}>
      <div className={styles.numberContainer}>
        {(last || first) && (
          <div
            className={styles.dotsContainer}
            style={last ? { right: '0', left: 'unset' } : undefined}
          >
            {Array.from(Array(10).keys()).map((key) => {
              return <BlueDot key={key} />;
            })}
          </div>
        )}
        <div
          className={styles.line}
          style={
            last
              ? { right: 'unset', left: '0' }
              : first
              ? {}
              : { width: '100%' }
          }
        />
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
