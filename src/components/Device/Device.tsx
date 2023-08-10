import styles from './Device.module.scss';
import Image from 'next/image';
import dots from '@images/back-dots.svg';

type Size = 'desktop' | 'mobile' | 'tablet';

type DeviceProps = {
  size: Size;
  image: string;
};

export default function Device(props: DeviceProps) {
  const { size, image } = props;

  function getCSSClass(size: Size): string {
    switch (size) {
      case 'desktop':
        return styles.deviceDesktop;
      case 'mobile':
        return styles.deviceMobile;
      case 'tablet':
        return styles.deviceTablet;
      default:
        return styles.deviceDesktop;
    }
  }

  return (
    <div className={`${styles.device} ${getCSSClass(size)}`}>
      <Image
        className={styles.backgroundImage}
        src={dots}
        alt={'background-dots'}
      />
      <Image className={styles.cover} src={image} alt={'app-cover'} />
    </div>
  );
}
