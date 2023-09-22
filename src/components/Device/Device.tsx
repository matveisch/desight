import styles from './Device.module.scss';
import Image from 'next/image';
import dots from '@images/back-dots.svg';
import BlueLine from '@components/BlueLine/BlueLine';

type Size = 'desktop' | 'mobile' | 'tablet';

type DeviceProps = {
  size: Size;
  image: any;
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
      <Image className={styles.backgroundImage} src={dots} alt={'background-dots'} />
      <Image className={styles.cover} src={image} alt={'app-cover'} />
      {size === 'desktop' && (
        <div className={styles.linesContainer}>
          <BlueLine width={90} />
          <div className={styles.dotsContainer}>
            <BlueLine width={6} />
            <BlueLine width={6} />
            <BlueLine width={6} />
          </div>
        </div>
      )}
      {size === 'tablet' && (
        <div className={styles.linesContainer}>
          <BlueLine width={50} />
          <BlueLine width={50} />
          <BlueLine width={50} />
        </div>
      )}
      {size === 'mobile' && (
        <div className={styles.linesContainer}>
          <BlueLine width={100} />
        </div>
      )}
    </div>
  );
}
