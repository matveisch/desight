import Image from 'next/image';
import styles from './WorkDescription.module.scss';
import arrow from '@images/arrow-link.svg';
import Link from 'next/link';

type PropsType = {
  icon: string;
  title: string;
  link: string;
  description: string;
};

export default function WorkDescription(props: PropsType) {
  const { icon, description, title, link } = props;
  return (
    <div className={styles.workDescription}>
      <div className={styles.head}>
        <div className={styles.headData}>
          <Image src={icon} alt={'icon'} height={100} />
          <h5>{title}</h5>
        </div>
        <div className={styles.headDataMobile}>
          <Image src={icon} alt={'icon'} className={styles.icon} />
          <h5>{title}</h5>
          {link && (
            <Link href={link} target="_blank">
              <Image src={arrow} alt={'arrow-link'} className={styles.arrow} />
            </Link>
          )}
        </div>
        {link && (
          <Link href={link} target="_blank">
            <Image src={arrow} alt={'arrow-link'} className={styles.arrow} />
          </Link>
        )}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
