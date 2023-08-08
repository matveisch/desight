import Image from 'next/image';
import { ServiceType } from '@/data/data';
import arrowIcon from '@images/arrow-link.svg';
import styles from './ItemBlock.module.scss';

type ItemBlockProps = {
  service: ServiceType;
  isBig?: boolean;
};

export default function ItemBlock(props: ItemBlockProps) {
  const { service, isBig } = props;

  return (
    <div className={isBig ? styles.itemBlockBig : styles.itemBlock}>
      <Image src={service.icon} alt={'icon'} className={styles.icon} />
      <div className={styles.description}>
        <div className={styles.header}>
          <h4>{service.title}</h4>
          <Image src={arrowIcon} alt={'arrow-icon'} className={styles.arrow} />
        </div>
        <p>{service.description}</p>
      </div>
    </div>
  );
}
