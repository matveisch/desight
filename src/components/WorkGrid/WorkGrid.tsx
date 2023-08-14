import Device from '@components/Device/Device';
import styles from './WorkGrid.module.scss';
import desktopPhoto from '@images/beetrade-desktop.svg';
import mobilePhoto from '@images/menu-mobile.svg';
import tabletPhoto from '@images/libira-tablet.svg';

export default function WorkGrid() {
  return (
    <div className={styles.container}>
      <Device size={'desktop'} image={desktopPhoto} />
      <Device size={'tablet'} image={tabletPhoto} />
      <Device size={'mobile'} image={mobilePhoto} />

      <Device size={'mobile'} image={mobilePhoto} />
      <Device size={'desktop'} image={desktopPhoto} />
      <Device size={'tablet'} image={tabletPhoto} />

      <Device size={'mobile'} image={mobilePhoto} />
      <Device size={'tablet'} image={tabletPhoto} />
      <Device size={'desktop'} image={desktopPhoto} />
    </div>
  );
}
