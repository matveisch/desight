import Image from 'next/image';
import styles from './WorkDescription.module.scss';
import arrow from '@images/arrow-link.svg';

type PropsType = {
  icon: string;
  title: string;
  link: string;
  description: string;
};

export default function WorkDescription(props: PropsType) {
  const { icon, description, title } = props;
  return (
    <div className={styles.workDescription}>
      <div className={styles.head}>
        <div className={styles.headData}>
          <Image src={icon} alt={'icon'} />
          <h5>{title}</h5>
        </div>
        <div className={styles.headDataMobile}>
          <Image src={icon} alt={'icon'} className={styles.icon} />
          <h5>{title}</h5>
          <Image src={arrow} alt={'arrow-link'} className={styles.arrow} />
        </div>
        <Image src={arrow} alt={'arrow-link'} className={styles.arrow} />
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
