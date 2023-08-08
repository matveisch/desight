import { DesignServiceType } from '@/data/data';
import Image from 'next/image';
import arrowIcon from '@images/arrow-link.svg';
import styles from './ItemBlock.module.scss';

type ItemBlockProps = {
  service: DesignServiceType;
  index: number;
};

export default function ItemBlock(props: ItemBlockProps) {
  const { service, index } = props;

  return (
    <div className={index === 0 ? styles.itemBlockBig : styles.itemBlock}>
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
